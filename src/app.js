import path from "node:path";
import express from "express";
import requestLogger from "./middleware/request_logger.js";
import validateTool from "./middleware/validate_tool.js";
import { tools } from "./data/tools.js";

export const app = express();

app.use(requestLogger);
app.use(validateTool);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/tools', (req, res) => {
  res.status(200).json({
    data: tools
  });
});