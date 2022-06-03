import express from 'express';
import { room } from '../controllers/room.js';

const router = express.Router();

router.post("/", room);

export default router;