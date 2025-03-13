import Joi from "joi"


export const addBookDetails = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishedYear: Joi.number().integer().required(),  // Ensures no decimals
    image: Joi.string().required(),  // Ensures it's a valid URL
    genres: Joi.array().items(Joi.string()).min(1).required(),  // Ensures at least 1 genre
    description: Joi.string().required(),
    publisher: Joi.string().required(),
    rating: Joi.number().min(0).max(5).allow(null).optional(),  // Allows null
    reviews: Joi.array().items(
        Joi.object({
            user: Joi.string().required(),
            comment: Joi.string().required(),
            date: Joi.date().default(Date.now)  // Ensures valid date default
        })
    ).optional().allow(null)  // Allows empty array or null
});

