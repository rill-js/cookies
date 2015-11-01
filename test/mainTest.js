var assert  = require("assert");
var Cookies = require("../src/cookies");

describe("Cookies", function () {
	var exampleCookie = "username=John%20Doe; expires=Thu, 28 May 2015 21:19:20 GMT; path=/";


	it("should parse cookies", function () {
		var cookies = new Cookies(exampleCookie);

		assert.equal(cookies.get("username"), "John Doe");
		assert.equal(cookies.get("expires"), "Thu, 28 May 2015 21:19:20 GMT");
		assert.equal(cookies.get("path"), "/");
	});

	it("should be able to set cookies", function () {
		var cookies = new Cookies(exampleCookie);
		cookies.set("a", 1);
		assert.equal(cookies.get("a"), "1");
	});

	it("should be able to serialze cookies", function () {
		var cookies = new Cookies(exampleCookie);
		cookies.set("a", 1);
		assert.deepEqual(cookies.serialize(), ["a=1"]);
	});

	it("should be able to specify options", function () {
		var cookies = new Cookies(exampleCookie);
		cookies.set("a", 1, {
			expires: new Date("2015-04-28T14:30:09.459Z"),
			maxAge: 1000,
			secure: true,
			httpOnly: true,
			path: "/test",
			domain: "test.com"
		});

		assert.deepEqual(cookies.serialize(), ["a=1;  domain=test.com;  path=/test;  expires=Tue, 28 Apr 2015 14:30:09 GMT;  max-age=1000;  httponly;  secure"]);
	});
});