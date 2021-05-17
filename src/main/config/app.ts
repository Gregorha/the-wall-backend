import express from 'express';
import { setupRoutes } from './routes';
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config({
  path:
    process.env.NODE_ENV === 'test'
      ? __dirname + '/../../../.env.test'
      : __dirname + '/../../../.env',
});

const app = express();
app.use(cors());
app.use(express.json());
setupRoutes(app)
export default app;
