import {app} from "./app.js";

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Tools API is running on port ${PORT}`);
});