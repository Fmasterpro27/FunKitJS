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
- 💬 Inspirational and motivational quotes
- 📦 Zero runtime dependencies
- ⚡ Fast and lightweight
- 🟦 Built-in TypeScript support
- 🔄 Python-style aliases included
- 💻 Built-in CLI support

---

## Quick Start

### CommonJS

```js
const {
  joke,
  dad_joke,
  roast,
  quote,
  quoteData
  get_joke,
  get_dad_joke,
  get_roast,
  version,
} = require("@fmasterpro27/funkitjs");

console.log(joke());
console.log(dad_joke());
console.log(roast());
console.log(quote());
const.log(quoteData());

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
  quote,
  get_joke,
  get_dad_joke,
  get_roast,
  version,
} from "@fmasterpro27/funkitjs";

console.log(quote());
```

---

## Usage

### Quote

```js
const { quote } = require("@fmasterpro27/funkitjs");

console.log(quote());
```

### Quote Data

```js
const { quoteData } = require("@fmasterpro27/funkitjs");

console.log(quoteData());
```

Example output:

```js
{
  id: 1,
  quote: "Stay hungry, stay foolish.",
  author: "Steve Jobs"
}
```

---

## CLI

Install globally:

```bash
npm install -g @fmasterpro27/funkitjs
```

Examples:

```bash
funkit joke
funkit dad-joke
funkit roast

funkit quote
funkit quote-data

funkit get-joke
funkit get-dad-joke
funkit get-roast

funkit version
funkit help
```

---

## API Reference

### quote()

Returns a random quote.

```js
const text = quote();
```

Returns:

```js
string;
```

---

### quoteData()

Returns quote metadata.

```js
const data = quoteData();
```

Returns:

```js
{
  id: number,
  quote: string,
  author: string
}
```

---

## TypeScript Support

```ts
import {
  joke,
  dad_joke,
  roast,
  quote,
  get_joke,
  get_dad_joke,
  get_roast,
  version,
} from "@fmasterpro27/funkitjs";

const text: string = quote();
```

---

## Project Structure

```text
funkitjs/
├── bin/
│   └── funkit.js
├── src/
│   ├── index.js
│   ├── jokes.js
│   ├── roast.js
│   ├── quotes.js
│   ├── version.js
│   └── data/
│       ├── jokes.json
│       ├── dad_jokes.json
│       ├── roasts.json
│       └── quotes.json
├── tests/
│   ├── jokes.test.js
│   ├── roasts.test.js
│   └── quotes.test.js
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
