'use strict';

function outputTo(domElement) {
	let name = 'Neptune',
		year = 0,
		mass = 5.97237 * Math.pow(10, 24),
		size = 1.08321 * Math.pow(10, 12),
		distance = '92.96 millionmi',
		atmosphere = 'Oxygen',
		satellites = 'Moon',
		explores = 'N/A';

	let display =	`Name: ${name}<br>
					Year Discovered: ${year}<br>
					Mass: ${mass}<br>
					Size: ${size}<br>
					Distance form Sun ${distance}<br>
					Atmosphere composition ${atmosphere}<br>
					Satellites ${satellites}<br>
					Explores ${explores}`;



    domElement.append(display);
}

module.exports = { outputTo };
