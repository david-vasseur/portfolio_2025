import { z } from "zod";

export const serviceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name is too long")
    .regex(/^[a-zA-ZÀ-ÿ\-'\s]+$/, "Name can only contain letters & spaces"),

  email: z
    .string()
    .trim()
    .email("You must provide a valid email address")
    .max(254, "Email is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message is too long")
    .refine(val => !/<[^>]*>/g.test(val), {
      message: "Message must not contain HTML tags",
    }),
});

export type TServiceSchema = z.infer<typeof serviceSchema>;