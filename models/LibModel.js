import { Schema, model } from "mongoose";
import normailze from "normalize-mongoose"

const librarySchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    image: { type: String, required: true },
    genres: { type: String, enum:["Fiction","Non-Fiction","Mystery","Romance","Fantasy","Horror","Self-Help","Biography/Memoir","Poetry","Thriller"], required:true},
    description: { type: String, required: true },
    publisher: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    reviews: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

librarySchema.plugin(normailze);

export const LibraryModel = model("Library", librarySchema);
