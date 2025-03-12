import { Schema, model } from "mongoose";

const librarySchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const LibraryModel = model("Library", librarySchema);
