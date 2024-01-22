#!/usr/bin/node
const fs = require('fs');

function readAndPrintFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Error: File not found - ${filePath}`);
        } else {
            console.error(`An error occurred: ${error.message}`);
        }
    }
}