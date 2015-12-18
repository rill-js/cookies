"use strict";
var cookieReg = / *([^=;]+) *= ? *([^;]+)?/g;

/**
 * Parses a cookie string into an object.
 *
 * @param {String} cookie
 * @return {Object}
 */
exports.parse = function parse (cookie) {
	var result = {};
	var m, key, val;
	if (typeof cookie !== "string") return result;

	while (m = cookieReg.exec(cookie)) {
		key         = m[1];
		val         = m[2];
		result[key] = val
			? decodeURIComponent(val)
			: undefined;
	}

	return result;
};

/**
 * Seralize each cookie in an array into a cookie string.
 * Pull out valid options from an options object and return a string.
 *
 * @param {Object} opts
 * @return {Object}
 */
exports.serialize = function serialize (key, val, opts) {
	var result = [key + "=" + encodeURIComponent(val)];

	if (opts) {
		if (opts.domain) result.push("domain=" + opts.domain);
		if (opts.path) result.push("path=" + opts.path);
		if (opts.expires) result.push("expires=" + (opts.expires.toUTCString
			? opts.expires.toUTCString()
			: opts.expires
		))
		if (opts.maxAge) result.push("max-age=" + (opts.maxAge | 0));
		if (opts.httpOnly) result.push("httponly");
		if (opts.secure) result.push("secure");
	}


	return result.join("; ");
};
