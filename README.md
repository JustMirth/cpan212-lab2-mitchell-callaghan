A simple API showing off routing functionality, along side middleware used to handle errors, as well as modify database using HttpRequest Methods (with validators for them).

To run: \
npm install\
cp .env.example .env\
npm run dev

Environment Variables:
|Name|Default|
|----|-------|
|PORT|4000|

## Routes

| Method | Path | Success | Errors |
|---|---|---|---|
| GET | `/api/health` | 200 `{ "status": "ok" }` | |
| GET | `/api/tools?category=&q=` | 200 `{ "data": [...] }` | 400 unknown category |
| GET | `/api/tools/:id` | 200 `{ "data": tool }` | 404 |
| POST | `/api/tools` | 201 `{ "data": tool }`, plus a `Location` header | 400 |
| PATCH | `/api/tools/:id` | 200 `{ "data": tool }` | 400, 404 |
| DELETE | `/api/tools/:id` | 204, empty body | 404 |

AI USAGE:\
    1.) On requirement 6, had localhost perpetually loading and could not figure out why, used chatgpt to determine I had to take the validator out of app.js\
    2.) On step 14, api was not patch, used chatgpt to look for errors, got pointed out I should be using put not patch.