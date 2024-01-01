import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const groupSchema = new Schema(
  {
    groupId:String,
    groupName: String,
    topicName: String,
    entranceKey: String,
  },
  {
    timestamps: true,
  }
);

const studyGroup = mongoose.models.studygroups || mongoose.model("studygroups", groupSchema);
export default studyGroup;
