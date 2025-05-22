import { client } from "../../lib/sanity";
import { groq } from "next-sanity";

export async function fetchHeroData() {
  const query = groq`*[_type == "hero"]{
  title,
  description,
  "imageUrl": image.asset._ref
}`;
  return await client.fetch(query);
}
