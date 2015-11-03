var assert  = require("assert");
var Cookies = require("../index.js");

describe("Cookies", function () {
	var exampleCookie = "username=John%20Doe; expires=Thu, 28 May 2015 21:19:20 GMT; path=/";


	it("should parse cookies", function () {
		var cookies = Cookies.parse(exampleCookie);

		assert.equal(cookies.username, "John Doe");
		assert.equal(cookies.expires, "Thu, 28 May 2015 21:19:20 GMT");
		assert.equal(cookies.path, "/");
	});

	it("should be able to serialze cookies", function () {
		var cookies = Cookies.serialize("a", 1);
		assert.deepEqual(cookies, "a=1");
	});

	it("should be able to specify options", function () {
		var cookies = Cookies.serialize("a", 1, {
			expires: new Date("2015-04-28T14:30:09.459Z"),
			maxAge: 1000,
			secure: true,
			httpOnly: true,
			path: "/test",
			domain: "test.com"
		});

		assert.deepEqual(cookies, "a=1;  domain=test.com;  path=/test;  expires=Tue, 28 Apr 2015 14:30:09 GMT;  max-age=1000;  httponly;  secure");
	});
});