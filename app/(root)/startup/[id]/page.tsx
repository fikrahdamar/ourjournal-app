import { client } from "@/sanity/lib/client";
import { ARTICLE_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(ARTICLE_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return <div>page ini adalah untuk {post.title}</div>;
};

export default page;
