#!/usr/bin/node

const fs = require('fs');

const [, , filePath, strToWrite] = process.argv;

fs.writeFile(filePath, strToWrite, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});