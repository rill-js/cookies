var Cookies = require("./cookies");

/**
 * Rill middleware that attaches cookie parser / serializer.
 */
module.exports = function (options) {
	return function cookieMiddleware (req, res, next) {
		var cookies = this.cookies = new Cookies(req.headers.cookie);

		return next().then(function () {
			var setCookie = cookies.serialize();
			if (setCookie && setCookie.length) res.headers["set-cookie"] = setCookie;
		});
	};
};

module.exports.Cookies = Cookies;