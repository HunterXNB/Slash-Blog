import prisma from "@/lib/db";
import React from "react";
import Post from "./Post";
import { redirect } from "next/navigation";
import Link from "next/link";
interface IProps {
  p: string;
}
const postNumberPerPage = 20;
const Posts = async ({ p }: IProps) => {
  const res = await prisma.posts.count();
  if (res === 0)
    return (
      <section>
        <p>No Posts Found</p>
      </section>
    );
  const lastPage = Math.ceil(res / postNumberPerPage);
  const currentPage = parseInt(p || "1");
  if (currentPage > lastPage || currentPage < 1) {
    redirect("/");
  }

  const data = await prisma.posts.findMany({
    skip: (currentPage - 1) * postNumberPerPage,
    take: postNumberPerPage,
  });
  return (
    <>
      <section>
        {data.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            createdAt={post.createdAt}
          />
        ))}
      </section>
      <div id="pagination">
        {Array.from(
          {
            length: lastPage,
          },
          (_, i) =>
            i + 1 === currentPage ? (
              <span key={i}>{i + 1}</span>
            ) : (
              <Link href={`/?page=${i + 1}`} key={i}>
                {i + 1}
              </Link>
            )
        )}
      </div>
    </>
  );
};

export default Posts;
