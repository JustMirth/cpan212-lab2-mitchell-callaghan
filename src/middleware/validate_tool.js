import {validateTool} from "../validators/tools.js";
import {HttpError} from "../utils/http_error.js";

export default function validateToolMiddleware({partial = false} = {}) {
    return (req, res, next) => {
        const { value, errors } = validateTool(req.body, { partial });
        if (Object.keys(errors).length > 0) {
            return next(new HttpError(400, "Validation failed", errors));
        }
        req.body = value;
        next();
    };
}