import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controllers';

const router = express.Router();

router.get('/', (req : Request, res : Response) => {
    res.send('Namaskar World.');
});

router.get('/api/hello', (req : Request, res : Response) => {
    res.json({ message: 'Namaskar World.' });
});

router.post('/api/chat', chatController.sendMessage);

export default router;