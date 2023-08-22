import { z } from "zod";
export const UserSchema = z.object({
    ID: z.number({
        required_error: "ID is required",
        invalid_type_error: "Invalid type, it must be a number",
    }),
    names: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Invalid type, it must be a string"
        }),
        surname: z.string({
            required_error: "Surname is required",
            invalid_type_error: "Invalid type, it must be a string"
        }),
        required_error: "Names is required"
    }),
    phone: z.string({
        required_error: "Phone is required",
        invalid_type_error: "Invalid type, it must be a string"
    }),
    address: z.string({
        required_error: "Address is required",
        invalid_type_error: "Invalid type, it must be a string"
    }),
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Invalid type, it must be a string"
    }),
    genre: z.object({
        nameGenre: z.enum(["masculino","femenino"]),
        abbreviation: z.enum(["M", "F"]),
        required_error: "Genre is required"
    }),
    attendant: z.object({
        ID: z.number({
            required_error: "ID is required",
            invalid_type_error: "Invalid type, it must be a number"
        }),
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Invalid type, it must be a string"
        }),
        phone: z.string({
            required_error: "Phone is required",
            invalid_type_error: "Invalid type, it must be a string"
        }),
        address: z.string({
            required_error: "Address is required",
            invalid_type_error: "Invalid type, it must be a string"
        }),
    }),
});