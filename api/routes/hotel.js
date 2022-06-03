import express from 'express';
import { createHotel, updateHotel, getAll, getById } from '../controllers/hotel.js';

const router = express.Router();

router.post("/create", createHotel)
router.post("/update/:id", updateHotel)
router.get("/getall", getAll)
router.get("/getbyid/:id", getById)

export default router;