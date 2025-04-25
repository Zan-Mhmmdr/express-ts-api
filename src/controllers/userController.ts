import { Request, Response } from 'express';
import db from '../db';
import { sendResponse } from '../utils/response';

// Get all users
export const UserController = (req: Request, res: Response) => {
    const sql = "SELECT * FROM `character`";

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("✅ Query result:", result);
        sendResponse(res, 200, "Data retrieved successfully", result);
    });
}

//  Get user by ID
export const getUserById = (req: Request, res: Response) => {
    const userId = req.params.id;
    const sql = "SELECT * FROM `character` WHERE id =" + userId;

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("✅ Query result:", result);
        sendResponse(res, 200, "Data retrieved successfully", result);
    });
}

//  Get user by name
export const postUser = (req: Request, res: Response) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({ error: "ID and Name are required" });
    }

    // Memasukkan id secara manual
    const sql = "INSERT INTO `character` (id, name) VALUES (?, ?)";

    db.query(sql, [id, name], (err, result: any) => {
        if (err) {
            console.error("❌ Query Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("✅ Inserted:", result);
        sendResponse(res, 201, "Character created", {
            id,
            name,
        });
    });
};

// put user by id
export const putUser = (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const sql = "UPDATE `character` SET name = ? WHERE id = ?";

    db.query(sql, [name, userId], (err, result) => {
        if (err) {
            console.error("❌ Query Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("✅ Updated:", result);
        sendResponse(res, 200, "Character updated", { id: userId, name });
    });
};

// Delete user by id
export const deleteUser = (req: Request, res: Response) => {
    const userId = req.params.id
    const sql = "DELETE FROM `character` WHERE id = ?"

    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("❌ Query Error:", err)
            return res.status(500).json({ error: "Internal Server Error" })
        }

        console.log("✅ Deleted:", result)
        sendResponse(res, 200, "Character deleted", { id: userId })
    })
}
