export default function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    if (err.type === "entity.parse.failed") {
        return res.status(400).json({
            error: { message: "Request body is not valid JSON" }
        });
    }

    console.error(err);

    res.status(500).json({
        error: {
            message: "Internal Server Error"
        }
    });
}