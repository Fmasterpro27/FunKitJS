const path = require("path");
const fs = require("fs");

const DATA = path.join(__dirname, "data");

const QUOTES = JSON.parse(
  fs.readFileSync(path.join(DATA, "quotes.json"), "utf8"),
);

function quote() {
  const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  return `"${q.quote}"\n\n— ${q.author}`;
}

function quoteData() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

module.exports = {
  quote,
  quoteData,
};
