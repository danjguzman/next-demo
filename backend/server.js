/* NOTE: This is not a backend demo, just something to make basic API calls. */

import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3010;

/* Set CORS */
app.use((req, res, next) => {
    const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* Get Local Data */
app.get('/:filePath(*)', (req, res) => { // I know it's not safe, just needed to route me to static data for frontend.

    /* Build File Paths */
    const filePath = req.params.filePath;
    const fullPath = join(__dirname, 'data', `${filePath}.json`); // Builds path like "data/(name).json"

    /* Check File, Existence & Parse JSON Data */
    readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

/* Consle Stuff */
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
