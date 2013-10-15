(function (global) {
var sinonChai = require('sinon-chai'),
    chai = require('chai'),
    jsdom = require("jsdom").jsdom,
    sinon = require('sinon');
global.chai = chai;
global.sinon = global.window = undefined;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
require('sinon-mocha').enhance(sinon);
chai.use(sinonChai);

beforeEach(function () {
  var doc = jsdom('<html><body></body></html>');
  global.window = doc.createWindow();
  global.sinon = sinon.sandbox.create();
});

afterEach(function () {
  global.sinon.restore();
});

})(global);
