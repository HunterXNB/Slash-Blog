import Posts from "@/components/Posts";
import prisma from "@/lib/db";
import StyledMain from "@/styles/StyledMain";
import { Suspense } from "react";
import HomeLoadingPage from "./loading";
interface IProps {
  searchParams: {
    page: string;
  };
}
export const dynamic = "force-dynamic";
export default function HomePage({ searchParams: { page } }: IProps) {
  return (
    <StyledMain>
      <h1>Posts</h1>
      <Suspense fallback={<HomeLoadingPage />}>
        <Posts p={page} />
      </Suspense>
    </StyledMain>
  );
}
