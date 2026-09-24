import { Router } from "express";
import { listTools, createNewTool, getTool, updateTool, deleteTool } from "../controllers/tools_controller.js";
import validateTool from "../middleware/validate_tool.js";

export const toolsRouter = Router();

toolsRouter.get("/", listTools);
toolsRouter.post("/", validateTool(), createNewTool);
toolsRouter.get("/:id", getTool);
toolsRouter.patch("/:id", validateTool({ partial: true }), updateTool);
toolsRouter.delete("/:id", deleteTool);