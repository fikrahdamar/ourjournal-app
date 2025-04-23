import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ArticleCard = ({ post }: { post: ArticleTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
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
          <Link href={`/user/${authorId}`}>
            <p className="font-work-sans font-medium">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-work-sans font-bold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={"https://placehold.co/48x48"}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="flex-between mt-4">
        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc ">{description}</p>
          <img src={image} alt="placeholder" className="startup-card_img" />
        </Link>
      </div>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button className="startup-card_btn " asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default ArticleCard;
