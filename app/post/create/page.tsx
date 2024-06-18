import CreatePostForm from "@/components/CreatePostForm";
import StyledMain from "@/styles/StyledMain";
import React from "react";

function CreatePostPage() {
  return (
    <StyledMain>
      <h1>Create Post</h1>
      <CreatePostForm />
    </StyledMain>
  );
}

export default CreatePostPage;
