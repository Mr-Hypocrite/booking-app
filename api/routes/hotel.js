import express from 'express';
import { createHotel, updateHotel, getAll, getById, deleteHotel } from '../controllers/hotel.js';

const router = express.Router();

router.post("/create", createHotel)
router.put("/update/:id", updateHotel)
router.get("/getall", getAll)
router.get("/getbyid/:id", getById)
router.delete("/deletehotel/:id", deleteHotel)

export default router;