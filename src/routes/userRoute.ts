import { Router } from "express";
import { deleteUser, getUserById, postUser, putUser, UserController } from "../controllers/userController";

const router = Router()

// GET /users/
router.get("/", UserController)

// GET /users/:id
router.get("/:id", getUserById)

// POST /users/
router.post("/", postUser)

// PUT /users/
router.put("/:id", putUser)

// DELETE /users/:id
router.delete("/:id", deleteUser)


export default router