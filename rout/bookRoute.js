import express from 'express';
import { getBook } from '../control/bookControl.js';

const router=express.Router();
router.get("/",getBook);

export default router;