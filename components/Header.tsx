import Link from "next/link";
import StyledHeader from "../styles/StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <Link href={"/"}>
        <h1>My Blog</h1>
      </Link>
      <div>
        <Link href={"/post/create"}>Create New Post</Link>
      </div>
    </StyledHeader>
  );
}
