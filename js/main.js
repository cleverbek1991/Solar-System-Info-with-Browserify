'use strict';

let earth = require('./earth'),
	venus = require('./venus'),
	mercury = require('./mercury'),
	saturn = require('./saturn'),
	jupiter = require('./jupiter'),
	uranus = require('./uranus'),
	mars = require('./mars'),
	neptune = require('./neptune');

let planets = {earth, venus, mercury, saturn, jupiter, uranus, mars, neptune};

let dom = $('#display');

for(var x in planets) {
	planets[x].outputTo(dom);
	dom.append(`<hr>`);
}