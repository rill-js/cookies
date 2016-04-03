[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Rill Cookies
A cookie parser and serializer used internally for Rill.

# Installation

#### Npm
```console
npm install @rill/cookies
```

# Example

```javascript
const { parse, serialize } = require("@rill/cookies");

parse("a=1"); // -> { a: 1 }
serialize("a", 1, { httpOnly: true }); // "a=1; httponly"
```

# API

**parse(cookie)** - Parse a cookie string into an object.

**serialize(cookie, value, options)** - Turn a cookie with options into a string.

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
