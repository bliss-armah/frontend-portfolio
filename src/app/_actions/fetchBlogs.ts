import { client } from "../../lib/sanity";
import { groq } from "next-sanity";

export async function fetchBlogs() {
  const query = groq`*[_type == "post"]{
    title
  }`;
  return await client.fetch(query);
}
