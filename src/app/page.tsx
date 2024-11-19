import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  await client.getSingle("homepage");

  return {
    title: "M-Inam Portfolio✨",
    description: "Welcome to my portfolio. Explore my projects, skills, and experiences in web development and design. Let's build something amazing together!",
    icons: {
      icon: "./image/ceo3.jpg",
      shortcut: "/icon.png",
      apple: "/icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/icon.png",
      },
    },
    openGraph: {
      title: "M-Inam Portfolio✨",
      description: "Welcome to my portfolio. Explore my projects, skills, and experiences in web development and design.",
      images: ['/icon.png'],
    },
  };
}
// description: page.data.meta_description,