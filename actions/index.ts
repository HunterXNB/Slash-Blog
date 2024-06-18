"use server";

import prisma from "@/lib/db";
import { formSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createPost(data: z.infer<typeof formSchema>) {
  try {
    const post = await prisma.posts.create({
      data,
    });
    revalidatePath("/");
    return post;
  } catch (error) {
    throw new Error("Could not create post");
  }
}
