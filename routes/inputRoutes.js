import express from 'express';
import inputController from '../controller/inputController.js';

const router = express.Router();

inputController.initialize();

router.post('/input', inputController.handleInput);
router.get('/files', inputController.getFiles);

export default router;
