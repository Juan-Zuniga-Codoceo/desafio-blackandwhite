import express from 'express';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'view', 'index.html'));
});

router.post('/process', async (req, res) => {
    const imageUrl = req.body.imageUrl;
    try {
        const image = await Jimp.read(imageUrl);
        image.resize(350, Jimp.AUTO);
        image.greyscale();
        const fileName = uuidv4().slice(0, 6) + '.jpg';
        await image.writeAsync(`./assets/images/${fileName}`);
        res.sendFile(path.join(process.cwd(), 'assets', 'images', fileName));
    } catch (error) {
        console.error('Error al procesar la imagen:', error);
        res.status(500).send('Error al procesar la imagen');
    }
});

export default router;
