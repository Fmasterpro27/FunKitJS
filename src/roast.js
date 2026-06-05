const path = require("path");
const fs = require("fs");

const DATA = path.join(__dirname, "data");

const ROASTS = JSON.parse(
    fs.readFileSync(path.join(DATA, "roasts.json"), "utf8")
);

function roast() {
    return ROASTS[Math.floor(Math.random() * ROASTS.length)].roast;
}

module.exports = {
    roast
};