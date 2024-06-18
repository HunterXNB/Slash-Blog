import Posts from "@/components/Posts";
import StyledMain from "@/styles/StyledMain";
import { Suspense } from "react";
import Loading from "@/components/Loading";
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
      <Suspense key={page} fallback={<Loading />}>
        <Posts p={page} />
      </Suspense>
    </StyledMain>
  );
}
