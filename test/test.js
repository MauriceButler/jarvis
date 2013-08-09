var test = require('tape'),
    jarvis = require('../index');

test('jarvis is a thing', function (t) {
    t.plan(1);
    t.ok(jarvis);   
});