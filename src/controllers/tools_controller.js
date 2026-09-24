import {findTool, findToolById, createTool, updateToolById, deleteToolById} from "../data/tools.js";
import {CATEGORIES, AVAILABLE} from "../validators/tools.js";
import {HttpError} from "../utils/http_error.js";

export function listTools(req, res) {
    const { category, available, q } = req.query;
    if (category !== undefined && !CATEGORIES.includes(category)) {
        throw new HttpError(400, "Invalid category. Must be one of: " + CATEGORIES.join(", "));
    }
    if (available !== undefined && available !== "true" && available !== "false") { 
        throw new HttpError(400, "Invalid availability parameter. Must be a boolean.");
    }
    if (q !== undefined && typeof q !== "string") {
        throw new HttpError(400, "Invalid query.", {q: "Search query must be a string"});
    }

    res.json({ 
        data: findTool({ 
            category, 
            available: available === undefined ? undefined : available === "true", 
            q 
        }) 
    });
}

export function getTool(req, res) {
    const tool = findToolById(req.params.id);
    if (!tool) {
        throw new HttpError(404, "Tool not found");
    }
    res.json({ data: tool });
}

export function createNewTool(req, res) {
    const tool = createTool(req.body);
    res.location("api/tools/" + tool.id).status(201).json({ data: tool });
}

export function updateTool(req, res) {
    const tool = updateToolById(req.params.id, req.body);
    if (!tool) {
        throw new HttpError(404, "Tool not found");
    }
    res.json({ data: tool });
}

export function deleteTool(req, res) {
    const success = deleteToolById(req.params.id);
    if (!success) {
        throw new HttpError(404, "Tool not found");
    }
    res.status(204).end();
}