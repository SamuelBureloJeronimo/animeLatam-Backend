import express from 'express';
import animeController from '../controllers/anime.controller';

const router = express.Router();

router.post('/save-anime', animeController.saveAnime);

export default router;