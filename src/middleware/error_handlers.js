import {HttpError} from "../utils/http_error.js";

export default function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    if (err.type === "entity.parse.failed") {
        return res.status(400).json({
            error: { message: "Request body is not valid JSON" }
        });
    }

    if (err.status === 404) {
        return res.status(404).json({
            error: { message: "ERROR 404: No route found for " + req.method + " " + req.originalUrl }
        });
    }

    console.error(err);

    res.status(500).json({
        error: {
            message: "Internal Server Error"
        }
    });
}