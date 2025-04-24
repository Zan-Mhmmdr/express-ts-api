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

