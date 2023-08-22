import { Router } from "express";
import * as UserController from "../controller/userController.js";
import { validateDTO } from "../middleware/validator.js"
import { UserSchema } from "../DTO/user.Schema.js"

const Users = Router();

Users
    .get("/", UserController.getAllUsers)
    .get("/:userID", UserController.getUserById)
    .post("/", validateDTO(UserSchema), UserController.createUser)



export default Users;