"use server";

import studyGroup from "@/lib/models/create-group-schema";
import connectMongoDB from "@/lib/mongoDB/mongo-client";
import { CreateGroup } from "@/utils/zod_schema";
import { z } from "zod";
import { revalidateTag } from "next/cache";

export const CreategroupAction = async (data: z.infer<typeof CreateGroup>) => {
  await connectMongoDB();
  const result = CreateGroup.safeParse(data as any);

  if (result.success) {
    const name = result.data;
    name.users = [];

    await studyGroup.create({
      groupName: name.groupName,
      topicName: name.topicName,
      entranceKey: name.entranceKey,
      users: name.users,
    });

    revalidateTag("studygroups");
  } else {
    console.error("Validation failed:", result.error);
    throw new Error("Validation failed");
  }
};
