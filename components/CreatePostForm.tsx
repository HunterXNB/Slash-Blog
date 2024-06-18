"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { object, z } from "zod";
import FormButton from "./FormButton";
import toast from "react-hot-toast";
import { formSchema } from "@/schemas";
import { ErrorMessage } from "@hookform/error-message";
import { createPost } from "@/actions";
import { redirect } from "next/navigation";

function CreatePostForm() {
  const {
    formState: { errors },
    register,
    trigger,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const submitted = useRef(false);

  return (
    <form
      id="post-form"
      action={async (formData) => {
        const isValid = await trigger();
        submitted.current = true;
        if (isValid) {
          const toastID = toast.loading("Creating post...");
          const data = formSchema.parse(Object.fromEntries(formData.entries()));
          let postId;
          try {
            let post = await createPost(data);
            postId = post.id;
            toast.success("Post created successfully!", {
              id: toastID,
            });
          } catch (error) {
            if (error instanceof Error) {
              toast.error(error?.message, { id: toastID });
            } else {
              toast.error("An error occured!", {
                id: toastID,
              });
            }
          } finally {
            redirect(`/post/${postId}`);
          }
        }
      }}
    >
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            onChange: (e) => {
              if (submitted.current) trigger("title");
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => <p className="error-message">{message}</p>}
        />
      </div>
      <div className="form-control">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          {...register("content", {
            onChange: (e) => {
              if (submitted.current) trigger("content");
            },
          })}
        />
        <ErrorMessage
          render={({ message }) => <p className="error-message">{message}</p>}
          errors={errors}
          name="content"
        />
      </div>
      <FormButton />
    </form>
  );
}

export default CreatePostForm;
