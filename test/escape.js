const assert = require('assert');
const escape = require('../escape');

suite('escape', function () {
	suite('escapeRegExp', function () {
		test('with special chars returns escaped string', function () {
			assert.equal(escape.escapeRegExp('[]{}-^$'), '\\[\\]\\{\\}\\-\\^\\$');
		});
		test('with special chars returns escaped string', function () {
			assert.equal(escape.escapeRegExp('[A-Za-z0-9]{}-^$'), '\\[A\\-Za\\-z0\\-9\\]\\{\\}\\-\\^\\$');
		});
		test('with special chars returns escaped string', function () {
			assert.equal(escape.escapeRegExp('[A-Za-z0-9]*?{}-^$'), '\\[A\\-Za\\-z0\\-9\\]\\*\\?\\{\\}\\-\\^\\$');
		});
	});
});