import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string({ message: "Title should be string." })
    .trim()
    .min(5, { message: "Title should be at least 5 characters." })
    .max(40, { message: "Title should be at most 40 characters." }),
  content: z.string({ message: "Content should be string." }).trim().min(100, {
    message: "Content should be at least 100 characters.",
  }),
});
