import Joi from "joi"


export const addBookDetails = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishedYear: Joi.number().integer().required(), // Ensures no decimals
    image: Joi.string().required(), // Ensures a valid URL
    genres: Joi.string()
        .valid("Fiction", "Non-Fiction", "Mystery", "Romance", "Fantasy",
            "Horror", "Self-Help", "Biography/Memoir", "Poetry", "Thriller")
        .required(), // Ensures only allowed categories
    description: Joi.string().required(),
    publisher: Joi.string().required(),
    rating: Joi.number().min(0).max(5).allow(null).optional(), // Allows null or optional rating
    reviews: Joi.string().required() // Assuming reviews are stored as a single string
});

