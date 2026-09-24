import path from "node:path";
import express from "express";
import { toolsRouter } from "./routes/routes.js";
import requestLogger from "./middleware/request_logger.js";
import notFoundError from "./middleware/not_found_error.js";
import errorHandler from "./middleware/error_handlers.js";

export const app = express();

app.use(requestLogger);
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use("/api/tools", toolsRouter);

/* Moved this into error handler in error_handlers.js
app.use(notFoundError); */

app.use(errorHandler);