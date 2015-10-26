# Rill Cookies
A cookie parser and serializer used internally for Rill.

# Installation

#### Npm
```console
npm install @rill/cookies
```

# Example

```javascript
const rill = require("rill");
const app  = rill();
const session = require("@rill/session");

app.use(function (req, res, next) {
	this.cookies.get("aCookie");
	this.cookies.set("aCookie", 1, { path: "/", httpOnly: true });
});
```

# API
**new Cookies(cookies)** - Creates a cookie getter and setter.

**#get(cookie)** - Get a cookie from the parsed cookies.

**#set(cookie, value, options)** - Set a cookie to be serialized later.

**#serialize()** - Returns an array of set-cookie strings.

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
