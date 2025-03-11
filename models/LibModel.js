import { Schema, model } from "mongoose";

const librarySchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedyear: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const LibraryModel = model("Library", librarySchema);
