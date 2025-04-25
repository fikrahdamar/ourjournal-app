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

export const ARTICLE_BY_ID_QUERY =
  defineQuery(`*[_type=="article" && _id==$id ][0] {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio, username
    },
    views,
    description,
    category,
    image,
      pitch,
    
    
}`);

export const ARTICLE_VIEWS_QUERY =
  defineQuery(`*[_type=="article" && _id==$id ][0] {
  _id, views}`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(
  `*[_type=="author" && id == $id][0]{
  _id,
  id,
  name,
  username,
  email,
  image,
  bio}`
);
