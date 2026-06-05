# FunKitJS

> A lightweight JavaScript library for jokes, dad jokes, and roasts — bring the laughs to your Node.js and TypeScript projects.

[![npm version](https://img.shields.io/npm/v/funkitjs.svg)](https://www.npmjs.com/package/funkitjs)
[![License](https://img.shields.io/npm/l/funkitjs.svg)](LICENSE)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [API Reference](#api-reference)
- [TypeScript Support](#typescript-support)
- [Contributing](#contributing)
- [License](#license)

---

## Features

* 🎭 **Random Jokes** — Fetch a random joke from a curated collection
* 👨 **Dad Jokes** — Classic, groan-worthy dad jokes on demand
* 🔥 **Roasts** — Playful roasts for light-hearted banter
* 📦 **Zero dependencies** — No external runtime dependencies required
* ⚡ **Fast & lightweight** — All data is bundled locally, no API requests needed
* 🟦 **TypeScript support** — Includes type definitions for IntelliSense and type checking

---

## Installation

Install FunKitJS from npm:

```bash
npm install funkitjs
```

Requires Node.js 18 or higher.

---

## Quick Start

### CommonJS

```js
const { joke, dadJoke, roast } = require("funkitjs");

console.log(joke());
console.log(dadJoke());
console.log(roast());
```

### ES Modules

```js
import { joke, dadJoke, roast } from "funkitjs";

console.log(joke());
console.log(dadJoke());
console.log(roast());
```

---

## Usage

### Random Jokes

```js
const { joke } = require("funkitjs");

console.log(joke());
// Output: "Why don't scientists trust atoms? Because they make up everything!"
```

### Dad Jokes

```js
const { dadJoke } = require("funkitjs");

console.log(dadJoke());
// Output: "I'm reading a book about anti-gravity. It's impossible to put down."
```

### Roasts

```js
const { roast } = require("funkitjs");

console.log(roast());
// Output: "I'd roast you, but my mom said I'm not allowed to burn trash."
```

### Version Information

```js
const { version } = require("funkitjs");

console.log(version);
// Output: "0.1.0"
```

---

## API Reference

### `joke(): string`

Returns a random joke from the built-in collection.

```js
const { joke } = require("funkitjs");

const randomJoke = joke();
```

### `dadJoke(): string`

Returns a random dad joke.

```js
const { dadJoke } = require("funkitjs");

const randomDadJoke = dadJoke();
```

### `roast(): string`

Returns a random playful roast.

```js
const { roast } = require("funkitjs");

const randomRoast = roast();
```

### `version: string`

Returns the current FunKitJS version.

```js
const { version } = require("funkitjs");
```

---

## TypeScript Support

FunKitJS includes built-in TypeScript definitions.

```ts
import { joke, dadJoke, roast, version } from "funkitjs";

const text: string = joke();
console.log(version);
```

---

## Project Structure

```text
funkitjs/
├── src/
│   ├── index.js
│   ├── jokes.js
│   ├── roast.js
│   ├── version.js
│   └── data/
│       ├── jokes.json
│       ├── dad_jokes.json
│       └── roasts.json
├── tests/
│   ├── jokes.test.js
│   └── roasts.test.js
├── index.d.ts
├── package.json
├── demo.js
├── LICENSE
└── README.md
```

---

## Contributing

Contributions are welcome! Whether it's adding new jokes, fixing bugs, or improving documentation — all help is appreciated.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/add-puns`)
3. Commit your changes (`git commit -m "Add pun support"`)
4. Push to your branch (`git push origin feature/add-puns`)
5. Open a Pull Request

Please make sure all tests pass before submitting changes.

---

## Links

* Homepage: https://github.com/Fmasterpro27/FunKitJS
* Issues: https://github.com/Fmasterpro27/FunKitJS/issues
* npm: https://www.npmjs.com/package/funkitjs

---

## License

This project is licensed under the **Apache License 2.0**. See the LICENSE file for details.
