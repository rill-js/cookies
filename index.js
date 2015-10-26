var cookieReg  = / *([^=;]+) *= ? *([^;]+)?/g;
var cookies    = Cookies.prototype;
module.exports = Cookies;

/**
 * Creates a cookie getter/setter.
 *
 * @constructor
 * @param {String} cookies - Initial cookies.
 */
function Cookies (cookie) {
	this._cookies = parseCookies(cookie);
	this._options = {};
}

/**
 * Gets a from the parsed, or set cookies.
 *
 * @param {String} key - the cookie to get.
 */
cookies.get = function get (key) {
	return this._cookies[key];
};

/**
 * Sets a cookie to be serialized later.
 *
 * @param {String} key - the cookie to set.
 * @param {*} val - The value for the cookie.
 * @param {Object} opts - Options for the cookie.
 */
cookies.set = function set (key, val, opts) {
	if (val == null) val = "";
	if (opts == null) opts = {};

	key                = String(key);
	val                = String(val);
	this._options[key] = opts;
	this._cookies[key] = val;
	return this;
};

/**
 * Seralize each cookie into a cookie string.
 *
 * @return {Array}
 */
cookies.serialize = function serialize () {
	var result = [];

	for (var key in this._options) {
		var val  = this._cookies[key];
		var opts = this._options[key];
		result.push(serializeCookie(key, val, opts));
	}

	return result;
};

/**
 * Parses a cookie string into an object.
 *
 * @param {String} cookie
 * @return {Object}
 */
function parseCookies (cookie) {
	var result = {};
	var key, val;
	if (typeof cookie !== "string") return result;

	while (m = cookieReg.exec(cookie)) {
		key         = m[1];
		val         = m[2];
		result[key] = val
			? decodeURIComponent(val)
			: undefined;
	}

	return result;
}

/**
 * Pull out valid options from an options object and return a string.
 *
 * @param {Object} opts
 * @return {Object}
 */
function serializeCookie (key, val, opts) {
	var result = [key + "=" + encodeURIComponent(val)];

	if (opts.domain) result.push("domain=" + opts.domain);
	if (opts.path) result.push("path=" + opts.path);
	if (opts.expires) result.push("expires=" + (opts.expires.toUTCString
		? opts.expires.toUTCString()
		: opts.expires
	))
	if (opts.maxAge) result.push("max-age=" + (opts.maxAge | 0));
	if (opts.httpOnly) result.push("httponly");
	if (opts.secure) result.push("secure");

	return result.join(";  ");
}