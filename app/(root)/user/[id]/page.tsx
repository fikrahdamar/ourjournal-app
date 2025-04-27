import { auth } from "@/auth";
import { ArticleCardSkeleton } from "@/components/ArticleCard";
import UserArticle from "@/components/UserArticle";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-[24px] font-work-sans font-black text-center uppercase line-clamp-1">
              {user.name}
            </h3>
          </div>
          <Image
            src={user.image}
            alt={user.name}
            width={220}
            height={220}
            className="rounded-full object-cover border-[3px] border-black"
          />
          <p className="text-[30px] font-work-sans font-bold text-center mt-7 text-amber-50">
            @{user?.username}
          </p>
          <p className="mt-2 text-center text-[14px] font-work-sans font-normal text-amber-50">
            {user?.bio}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="font-work-sans text-[30px] font-bold ">
            {session?.id === id ? "Your" : "All"} Startups
          </p>
          <ul className="grid sm:grid-cols-2 gap-5">
            <Suspense fallback={<ArticleCardSkeleton />}>
              <UserArticle id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
