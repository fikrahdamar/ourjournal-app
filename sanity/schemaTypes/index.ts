import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { article } from "./article";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, article],
};
