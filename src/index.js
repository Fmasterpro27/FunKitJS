const { joke, dadJoke } = require("./jokes.js");
const { roast } = require("./roast.js");

module.exports = {
    ...require("./jokes"),
    ...require("./roast"),
    ...require("./version")
};
