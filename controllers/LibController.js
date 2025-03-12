import { LibraryModel } from "../models/LibModel.js";
import { addBookDetails } from "../validators/LibValidator.js";

// Add a new book
export const addBook = async (req, res, next) => {
  try {
    console.log(req.body);
    const { error, value } = addBookDetails.validate({
      ...req.body,
      image: req.file.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }
    await LibraryModel.create(value);
    res.status(201).json({ message: "Book added" });
  } catch (error) {
    next(error);
  }
};

// Get all books
export const getAllBooks = async (req, res, next) => {
  try {
    const getBooks = await LibraryModel.find();
    res.status(200).json(getBooks);
  } catch (error) {
    next(error);
  }
};

// Get a book by ID
export const getBookById = async (req, res, next) => {
  try {
    const book = await LibraryModel.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Update a book
export const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;
    const updateDetail = await LibraryModel.findByIdAndUpdate(
      id,
      { title, author, publishedYear },
      { new: true }
    );
    if (updateDetail) {
      res.status(200).json({ message: "Book updated", updateDetail });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Delete a book
export const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await LibraryModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
