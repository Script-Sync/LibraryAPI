import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/LibController.js";

const booksRouter = Router();

booksRouter.post('/books', addBook);
booksRouter.get('/books', getAllBooks);
booksRouter.get('/books/:id', getBookById);
booksRouter.put('/books/:id', updateBook);
//booksRouter.patch('/books:id', updateBook);
booksRouter.delete('/books/:id', deleteBook);


export default booksRouter;  // Export the router