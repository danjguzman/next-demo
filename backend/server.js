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
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* Get Local Data */
app.get('/:filePath(*)', (req, res) => {

    /* Build File Paths */
    const filePath = req.params.filePath;
    const fullPath = join(__dirname, 'data', `${filePath}.json`); // Builds path like "data/(name).json"

    /* Check File, Existance & Parse JSON Data */
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