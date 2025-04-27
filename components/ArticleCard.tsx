/* eslint-disable @next/next/no-img-element */
import { cn, formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Article, Author } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type ArticleTypeCard = Omit<Article, "author"> & { author?: Author };

const ArticleCard = ({ post }: { post: ArticleTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    _id,
    description,
    image,
    category,
    title,
  } = post;
  return (
    <li className="startup-card group mt-5">
      <div className="flex-between font-work-sans font-medium">
        <p>{formatDate(_createdAt)}</p>
        <div className="flex-between gap-2">
          <Eye />
          <span>{views}</span>
        </div>
      </div>
      <div className="flex-between mt-7">
        <div>
          <Link href={`/user/${author?._id}`}>
            <p className="font-work-sans font-medium">{author?.name}</p>
          </Link>
          <Link href={`/article/${_id}`}>
            <h3 className="font-work-sans font-bold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image ?? "https://placehold.co/48x48"}
            alt={author?.name ?? "Anonymous"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/article/${_id}`} className="block w-full mt-6">
        <div className="flex flex-col">
          <p className="startup-card_desc">{description}</p>
          <img src={image} alt="placeholder" className="startup-card_img" />
        </div>
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button className="startup-card_btn " asChild>
          <Link href={`/article/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const ArticleCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="article-card_skeleton" />
      </li>
    ))}
  </>
);

export default ArticleCard;
