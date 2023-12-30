'use server';

import { CreateGroup } from "@/utils/zod_schema";
import { z } from "zod";

export const CreategroupAction = (data: z.infer<typeof CreateGroup>) => {
  const name = CreateGroup.safeParse(data);
  console.log(name);
};
