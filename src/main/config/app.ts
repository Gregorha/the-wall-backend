import express from 'express';
import { setupRoutes } from './routes';
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
setupRoutes(app)
export default app;
