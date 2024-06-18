import prisma from "@/lib/db";
import { ImageResponse } from "next/og";
import PostPage from "./page";

export const runtime = "edge";

export const alt = "My Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
interface IProps {
  params: {
    slug: string;
  };
}
export default async function Image({ params: { slug } }: IProps) {
  const data = await prisma.posts.findFirst({
    where: {
      id: parseInt(slug),
    },
  });
  return new ImageResponse(
    data ? <PostPage params={{ slug }} /> : <div></div>,
    {
      ...size,
    }
  );
}
