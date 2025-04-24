import { Router } from "express";
import { getUserById, postUser, UserController } from "../controllers/userController";

const router = Router()

// GET /users/
router.get("/", UserController)

// GET /users/:id
router.get("/:id", getUserById)

// POST /users/
router.post("/", postUser)

// PUT /users/
router.put("/", (req, res) => {
    res.send("PUT request to the homepage")
})

// PATCH /users/
router.delete("/", (req, res) => {
    res.send("DELETE request to the homepage")
})

export default router