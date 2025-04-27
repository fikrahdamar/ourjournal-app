import { client } from "@/sanity/lib/client";
import { ARTICLE_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import ArticleCard, { ArticleTypeCard } from "./ArticleCard";

const UserArticle = async ({ id }: { id: string }) => {
  const article = await client.fetch(ARTICLE_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {article?.length > 0 ? (
        article.map((article: ArticleTypeCard) => (
          <ArticleCard key={article._id} post={article} />
        ))
      ) : (
        <p className="font-work-sans font-normal text-sm">No Post Yet</p>
      )}
    </>
  );
};

export default UserArticle;
