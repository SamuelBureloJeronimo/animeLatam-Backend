import express from 'express';
import genreController from '../controllers/genre.controller.js';

const router = express.Router();

router.post('/save-genre', genreController.saveGenre);
router.get('/get-genres', genreController.getGenres);
router.get('/get-genre/:id', genreController.getGenre);
router.put('/update-genre/:id', genreController.updateGenre);
router.delete('/delete-genre/:id', genreController.deleteGenre);

export default router;