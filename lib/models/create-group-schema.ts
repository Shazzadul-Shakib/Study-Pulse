import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema(
  {
    groupName: String,
    topicName: String,
    entranceKey: String,
    users: {
      type: Array,
      default: [] as any[],
    },
  },
  {
    timestamps: true,
  }
);

const studyGroup =
  mongoose.models.studygroups || mongoose.model("studygroups", groupSchema);

export default studyGroup;
