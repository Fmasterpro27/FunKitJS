const path = require("path");
const fs = require("fs");

const DATA = path.join(__dirname, "data");

const JOKES = JSON.parse(
    fs.readFileSync(path.join(DATA, "jokes.json"), "utf8")
);

const DAD_JOKES = JSON.parse(
    fs.readFileSync(path.join(DATA, "dad_jokes.json"), "utf8")
);

function joke() {
    return JOKES[Math.floor(Math.random() * JOKES.length)].joke;
}

function dad_joke() {
    return DAD_JOKES[Math.floor(Math.random() * DAD_JOKES.length)].joke;
}

function get_joke() {
    return joke();
}

function get_dad_joke() {
    return dad_joke();
}


module.exports = {
    joke,
    dad_joke,
    get_joke,
    get_dad_joke
};
