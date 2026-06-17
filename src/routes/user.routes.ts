import express from "express";
import {
  getAllUsers,
  deleteUserById,
  updateUserById,
  createUser,
} from "../services/user.services.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/create", createUser);
router.put("/update/:id", updateUserById);
router.delete("/delete/:id", deleteUserById);

export default router;
