export default function notFoundError(req, res, next) {
    res.status(404).json({
        error: { message: "ERROR 404: No route found for " + req.method + " " + req.originalUrl
        }
    });
}