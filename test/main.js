var test = require('tape')
var Cookies = require('../index.js')
var exampleCookie = 'username=John%20Doe; expires=Thu, 28 May 2015 21:19:20 GMT; path=/'

test('Parse Cookie', function (t) {
  t.plan(3)
  var cookies = Cookies.parse(exampleCookie)
  t.equal(cookies.username, 'John Doe', 'parse username')
  t.equal(cookies.expires, 'Thu, 28 May 2015 21:19:20 GMT', 'parse expires')
  t.equal(cookies.path, '/', 'parse path')
})

test('Serialize Cookie', function (t) {
  t.plan(1)
  var cookies = Cookies.serialize('a', 1)
  t.deepEqual(cookies, 'a=1', 'serialize a=1')
})

test('Set Options', function (t) {
  t.plan(1)
  var cookies = Cookies.serialize('a', 1, {
    expires: new Date('2015-04-28T14:30:09.459Z'),
    maxAge: 1000,
    secure: true,
    httpOnly: true,
    path: '/test',
    domain: 'test.com'
  })
  t.deepEqual(cookies, 'a=1; domain=test.com; path=/test; expires=Tue, 28 Apr 2015 14:30:09 GMT; max-age=1000; httponly; secure', 'set all options')
})
