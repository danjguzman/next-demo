import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3010;

/* This is not a backend demo, just something to make basic API calls. */

app.get('/:filePath(*)', (req, res) => {
    const filePath = req.params.filePath; // Captures full path like "a/b/c"
    const fullPath = join(__dirname, 'data', `${filePath}.json`); // Builds path like "data/(name).json"

    readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});