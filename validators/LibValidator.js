import Joi from "joi";

export const addBookDetails = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publicationYear: Joi.number().required(),
})