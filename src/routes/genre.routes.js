import express from 'express';
import genreController from '../controllers/genre.controller.js';

const router = express.Router();

router.post('/save-genre', genreController.saveGenre);

export default router;