import StyledPost from "@/styles/StyledPost";
import Link from "next/link";
import React from "react";
interface IProps {
  title?: string;
  createdAt?: Date;
  id?: number;
  isLoading?: boolean;
}
function Post({ title, createdAt, id, isLoading }: IProps) {
  if (isLoading) return <StyledPost isLoading />;
  return (
    <Link href={`/post/${id}`}>
      <StyledPost>
        <h2>{title}</h2>
        <p>
          {createdAt?.toLocaleDateString("en-US", {
            dateStyle: "medium",
          })}
        </p>
      </StyledPost>
    </Link>
  );
}

export default Post;
