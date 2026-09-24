const CATEGORIES = ["power", "hand", "garden", "cleaning"];
const CONDITIONS = ["new", "good", "worn"];

export function validateTool(body, {partial = false} = {}) {
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return { valid: {}, errors: { body: "Request body must be a JSON object" } };
    }

    const value = {};
    const errors = {};
    const shouldValidate = (field) => !partial || body[field] !== undefined;

    if (shouldValidate("toolname")) {
        const name = typeof body.toolname === "string" ? body.toolname.trim() : "";
        if (name.length < 2 || name.length > 60) {
            errors.toolname = "Tool name must be between 2 and 60 characters";
        } else {
            value.toolname = name;
        }
    }
    
    if (shouldValidate("category")) {
        if (!CATEGORIES.includes(body.category)) {
            errors.category = "Category must be one of: " + CATEGORIES.join(", ");
        } else {
            value.category = body.category;
        }
    }

    if (shouldValidate("condition")) {
        if (!CONDITIONS.includes(body.condition)) {
            errors.condition = "Condition must be one of: " + CONDITIONS.join(", ");
        } else {
            value.condition = body.condition;
        }
    }

    if (shouldValidate("available")) {
        if (typeof body.available !== "boolean") {
            errors.available = "Available must be a boolean";
        } else {
            value.available = body.available;
        }
    }

    if (shouldValidate("maxLoanDays")) {
        if (!Number.isInteger(body.maxLoanDays) || body.maxLoanDays < 1 || body.maxLoanDays > 14) {
            errors.maxLoanDays = "Max loan days must be an integer between 1 and 14";
        } else {
            value.maxLoanDays = body.maxLoanDays;
        }
    }
    
    return { value, errors };
}