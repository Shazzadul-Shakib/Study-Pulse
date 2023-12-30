import { z } from "zod";

export const CreateGroup = z.object({
  groupName: z
    .string()
    .min(3),
  topicName: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" }),
  entranceKey: z
    .string()
    .min(5)
    .max(7),
});