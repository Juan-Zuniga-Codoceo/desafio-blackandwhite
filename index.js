import express from 'express';
import path from 'path';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), 'assets')));
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));
