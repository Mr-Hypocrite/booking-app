import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room";
const router = express.Router();

// Create
router.post('/:hotelId', createRoom);

// Update
router.put('/:id', updateRoom);

// Delete
router.detele('/:id', deleteRoom);

// Get
router.get('/:id', getRoom);

// Get All
router.post('/', getRooms);

export default router;