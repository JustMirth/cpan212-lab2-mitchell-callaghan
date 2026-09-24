import path from "node:path";
import express from "express";
import requestLogger from "./middleware/request_logger.js";
import notFoundError from "./middleware/not_found_error.js";
import errorHandler from "./middleware/error_handlers.js";
import { tools } from "./data/tools.js";

export const app = express();

app.use(requestLogger);
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/tools', (req, res) => {
  res.status(200).json({
    data: tools
  });
});

app.use(notFoundError);
app.use(errorHandler);