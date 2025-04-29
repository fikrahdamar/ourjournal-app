/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import {
  ARTICLE_BY_ID_QUERY,
  PLAYLIST_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import ArticleCard, { ArticleTypeCard } from "@/components/ArticleCard";

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, { select: bestPicks }] = await Promise.all([
    client.fetch(ARTICLE_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "best-picks",
    }),
  ]);

  if (!post) return notFound();
  const parsedContent = md.render(post.pitch || "");

  return (
    <>
      <section className="navy-container">
        <div className="flex flex-col items-center  gap-2 w-full max-w-3xl">
          <div className="lightblue-container">
            <h3 className="p-2.5 px-4">{formatDate(post?._createdAt)}</h3>
          </div>
          <div className="lightnavy-container">
            <h2 className="text-center  py-6 text-3xl">{post?.title}</h2>
          </div>
          <div className="text-white font-work-sans font-medium text-center w-5/6 mt-2 pb-6">
            <p>{post?.description}</p>
          </div>
        </div>
      </section>
      <section className="px-8 py-10 max-w-7xl mx-auto">
        <img
          src={post?.image}
          alt="article picture"
          className="rounded-xl mt-6 w-full h-auto shadow-2xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl  mx-auto">
          <div className="flex-between gap-10">
            <Link
              href={`/user/${post?.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="author image"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div className="ml-5">
                <p className="font-work-sans font-bold text-[20px]">
                  {post?.author?.name}
                </p>
                <p className="font-work-sans font-medium text-[20px] text-stone-500">
                  @{post?.author?.username}
                </p>
              </div>
            </Link>
            <p className="category-tag">{post.category}</p>
          </div>
          <h3 className="font-work-sans text-4xl font-bold mt-8 ">
            Pitch Details
          </h3>
          {parsedContent ? (
            <article
              className="prose font-work-sans break-all max-w-4xl pb-8"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p>No detail provided</p>
          )}
        </div>

        <hr className="divider" />

        {bestPicks.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-[30px] font-work-sans font-bold">Best Picks</p>
            <ul className="grid sm:grid-cols-2 gap-5">
              {bestPicks.map((post: ArticleTypeCard, index: number) => (
                <ArticleCard key={index} post={post} />
              ))}
            </ul>
          </div>
        )}
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
