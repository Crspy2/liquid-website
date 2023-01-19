import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import { Image } from "sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion =  process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => builder.image(source);
