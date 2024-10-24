// Reference Error (x is not defined)
console.log(x);

// Type Error (num is not a function)
let num = 10;
num();

// Invalid JSON parse (SyntaxError)
let jsonString = "{ name: 'John' }"; // Invalid JSON (single quotes)
JSON.parse(jsonString);

// File not found error (fs module)
const fs = require("fs");
fs.readFileSync("nonexistentFile.txt"); // Throws Error: ENOENT (file not found)
