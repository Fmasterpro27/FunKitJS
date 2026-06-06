# FunKitJS

> A lightweight JavaScript library for jokes, dad jokes, and roasts — bring the laughs to your Node.js and TypeScript projects.

[![npm version](https://img.shields.io/npm/v/@fmasterpro27/funkitjs.svg)](https://www.npmjs.com/package/@fmasterpro27/funkitjs)
[![License](https://img.shields.io/npm/l/@fmasterpro27/funkitjs.svg)](LICENSE)

---

## Table of Contents

- Features
- Installation
- Quick Start
- Usage
- API Reference
- TypeScript Support
- Contributing
- License

---

## Features

- 🎭 Random jokes from a curated collection
- 👨 Dad jokes for maximum cringe
- 🔥 Playful roasts for friendly banter
- 📦 Zero runtime dependencies
- ⚡ Fast and lightweight
- 🟦 Built-in TypeScript support
- 🔄 Python-style aliases included

---

## Installation

Install from npm:

```bash
npm install @fmasterpro27/funkitjs
```

Requires Node.js 18 or higher.

---

## Quick Start

### CommonJS

```js
const {
  joke,
  dad_joke,
  roast,
  get_joke,
  get_dad_joke,
  get_roast,
  version,
} = require("@fmasterpro27/funkitjs");

console.log(joke());
console.log(dad_joke());
console.log(roast());

console.log(get_joke());
console.log(get_dad_joke());
console.log(get_roast());

console.log(version);
```

### ES Modules

```js
import {
  joke,
  dad_joke,
  roast,
  get_joke,
  get_dad_joke,
  get_roast,
  version,
} from "@fmasterpro27/funkitjs";

console.log(get_joke());
console.log(get_dad_joke());
console.log(get_roast());
```

---

## Usage

### Random Joke

```js
const { joke } = require("@fmasterpro27/funkitjs");

console.log(joke());
```

### Dad Joke

```js
const { dad_joke } = require("@fmasterpro27/funkitjs");

console.log(dad_joke());
```

### Roast

```js
const { roast } = require("@fmasterpro27/funkitjs");

console.log(roast());
```

### Python-Style Aliases

```js
const { get_joke, get_dad_joke, get_roast } = require("@fmasterpro27/funkitjs");

console.log(get_joke());
console.log(get_dad_joke());
console.log(get_roast());
```

---

## API Reference

### joke()

Returns a random joke.

```js
const text = joke();
```

Returns:

```js
string;
```

---

### get_joke()

Alias for `joke()`.

```js
const text = get_joke();
```

Returns:

```js
string;
```

---

### dad_joke()

Returns a random dad joke.

```js
const text = dad_joke();
```

Returns:

```js
string;
```

---

### get_dad_joke()

Alias for `dad_joke()`.

```js
const text = get_dad_joke();
```

Returns:

```js
string;
```

---

### roast()

Returns a random roast.

```js
const text = roast();
```

Returns:

```js
string;
```

---

### get_roast()

Alias for `roast()`.

```js
const text = get_roast();
```

Returns:

```js
string;
```

---

### version

Returns the current package version.

```js
const { version } = require("@fmasterpro27/funkitjs");

console.log(version);
```

Example:

```js
0.1.0
```

---

## TypeScript Support

FunKitJS includes built-in TypeScript definitions.

```ts
import {
  joke,
  dad_joke,
  roast,
  get_joke,
  get_dad_joke,
  get_roast,
  version,
} from "@fmasterpro27/funkitjs";

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
├── LICENSE
└── README.md
```

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

Please ensure all tests pass before submitting changes.

---

## Links

- GitHub: https://github.com/Fmasterpro27/FunKitJS
- Issues: https://github.com/Fmasterpro27/FunKitJS/issues
- npm: https://www.npmjs.com/package/@fmasterpro27/funkitjs

---

## License

This project is licensed under the Apache License 2.0.

See the LICENSE file for details.
