import * as yup from "yup";

// strict() = no automatic conversion, so the string "1" is NOT accepted as the number 1
export const cartItemSchema = yup.object({
    id: yup.number().required(),
    name: yup.string().required(),
    description: yup.string().defined(),
    price: yup.number().min(0).required(),
    category: yup.string().defined(),
    image: yup.object({ url: yup.string().defined() }).required(),
    qty: yup.number().integer().min(1).required()
}).strict()