import path from "node:path";
import express from "express";
import requestLogger from "./middleware/request_logger.js";

export const app = express();

app.use(requestLogger);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});