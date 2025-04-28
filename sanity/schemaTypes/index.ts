import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { article } from "./article";
import { playlist } from "./playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, article, playlist],
};
