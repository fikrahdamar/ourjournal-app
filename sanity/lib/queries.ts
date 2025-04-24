import { defineQuery } from "next-sanity";

export const ARTICLE_QUERY =
  defineQuery(`*[_type=="article" && defined(slug.current)  && !defined($search) || title match $search || category match $search || author->name match $search | order(_createdAt desc) ] {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image,
    
    
}`);
