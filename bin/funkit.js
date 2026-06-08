#!/usr/bin/env node

const {
  joke,
  dad_joke,
  roast,
  get_joke,
  get_dad_joke,
  get_roast,
  getVersion,
} = require("../src");

const command = process.argv[2]?.toLowerCase();

switch (command) {
  case "joke":
    console.log(joke());
    break;

  case "dad-joke":
  case "dad_joke":
    console.log(dad_joke());
    break;

  case "roast":
    console.log(roast());
    break;

  case "get-joke":
  case "get_joke":
    console.log(get_joke());
    break;

  case "get-dad-joke":
  case "get_dad_joke":
    console.log(get_dad_joke());
    break;

  case "get-roast":
  case "get_roast":
    console.log(get_roast());
    break;

  case "version":
  case "-v":
  case "--version":
    console.log(getVersion());
    break;

  case "help":
  case "-h":
  case "--help":
  default:
    console.log(`
FunKitJS CLI

Usage:
  funkit joke
  funkit dad-joke
  funkit roast

  funkit get-joke
  funkit get-dad-joke
  funkit get-roast

  funkit version

Examples:
  funkit joke
  funkit dad-joke
  funkit roast
`);
}
