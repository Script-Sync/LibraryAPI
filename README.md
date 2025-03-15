//Project Overview <br>
// Project Name: Library API <br>
//Description:<br>
Library API is an API for managing Library books. it provides CRUD(create, read, update and delete) <br>
operations for books, with input validators and error handling methods.<br>
//Key Features <br>
1.Add a new book <br>
2.Retrieve all book and a specific book by Id <br>
3.Update book details <br>
4.Input Validation and error handling <br>
//Tech Stack <br>
1.Node.js <br>
2.Express.js <br>
3.MongoDB <br>
4.Package Manager : npm <br>
5.Version Control : Git <br>
//API endpoints <br>
GET /api/books <br>
GET /api/books/:id <br>
POST /api/books <br>
PUT /api/books/:id <br>
DELETE /api/books/:id <br>
//Installation <br>
//install dependencies <br>
npm install <br>
//Start Server <br>
npm run dev <br>
//Book Models <br>
title: { type: String, required: true },<br>
author: { type: String, required: true },<br>
publishedYear: { type: Number, required: true },<br>
image: { type: String, required: true },<br>
genres: { type: String, enum:["Fiction","Non-Fiction","Mystery","Romance","Fantasy","Horror","Self-Help","Biography/Memoir","Poetry","Thriller"], required:true},<br>
description: { type: String, required: true },<br>
publisher: { type: String, required: true },<br>
rating: { type: Number, min: 0, max: 5 },<br>
reviews: { type: String, required: true },<br>

