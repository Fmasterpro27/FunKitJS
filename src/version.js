const { version } = require("../package.json");

function getVersion() {
  return version;
}

module.exports = {
  getVersion,
};
