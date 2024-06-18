import prisma from "@/lib/db";
import StyledMain from "@/styles/StyledMain";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { Metadata } from "next";
interface IProps {
  params: {
    slug: string;
  };
}
export async function generateMetadata({
  params: { slug },
}: IProps): Promise<Metadata> {
  const data = await prisma.posts.findFirst({ where: { id: parseInt(slug) } });
  if (!data) {
    notFound();
  }
  return {
    title: `My Blog - ${data.title}`,
  };
}
async function PostPage({ params: { slug } }: IProps) {
  const data = await prisma.posts.findFirst({
    where: {
      id: parseInt(slug),
    },
  });
  if (!data) {
    notFound();
  }
  return (
    <StyledMain>
      <div className="post-details">
        <h1>{data.title}</h1>
        <p style={{ marginLeft: "auto", width: "fit-content" }}>
          {data.createdAt.toLocaleDateString()}
        </p>
      </div>
      <MDXRemote source={data.content} />
    </StyledMain>
  );
}

export default PostPage;
