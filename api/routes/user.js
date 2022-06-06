import express from "express";
import { updateUser, getAllUsers, deleteUser, getUser } from "../controllers/user.js";

const router = express.Router();



router.put("/update/:id", updateUser);
router.get("/getall", getAllUsers);
router.get("/get/:id", getUser);
router.get("/delete/:id", deleteUser);

export default router;