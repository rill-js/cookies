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
const cookies = require("@rill/cookies");

app.use(cookies());
app.use(function (req, res, next) {
	this.cookies.get("aCookie");
	this.cookies.set("aCookie", 1, { path: "/", httpOnly: true });
});
```

# Cookie API
**#get(cookie)** - Get a cookie from the parsed cookies.

**#set(cookie, value, options)** - Set a cookie to be serialized later.

**#serialize()** - Returns an array of set-cookie strings.

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
