<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/cookies
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/cookies">
    <img src="https://img.shields.io/npm/v/@rill/cookies.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/cookies">
    <img src="https://img.shields.io/npm/dm/@rill/cookies.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

A cookie parser and serializer used internally for Rill that works isomorphically.

# Installation

```console
npm install @rill/cookies
```

# Example

```javascript
const { parse, serialize } = require("@rill/cookies")

parse("a=1") // -> { a: 1 }
serialize("a", 1, { httpOnly: true }) // "a=1; httponly"
```

# API

**parse(cookie)** - Parse a cookie string into an object.

**serialize(cookie, value, options)** - Turn a cookie with options into a string.

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
