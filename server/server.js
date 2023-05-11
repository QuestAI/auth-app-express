import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import AuthRoutes from './routes/auth.routes.js';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';

dotenv.config();
const app = new express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet());
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());
app.use(logger);

// Routes
app.use('/client', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.use('/', AuthRoutes);

// Error Handler Middleware (always at the bottom)
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
