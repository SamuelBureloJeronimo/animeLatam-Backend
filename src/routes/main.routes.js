import express from 'express';

import firstMsg from '../controllers/main.controller.js'

const router = express.Router();

router.get('/', firstMsg);

export default router;