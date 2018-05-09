var os = require('os');
var OSinfo = require('../modules/OSinfo');
var toTime = require('../modules/toTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (!input) {
		return;
	};
	var inputToString = input.toString();
	var instruction = inputToString.trim();
	switch (instruction) {
		case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
			break;
		case '/sayhello':
			process.stdout.write('hello!\n');
			break;
		case '/getOSinfo':
			OSinfo.print(); 
			break;
		case '/toTime':
			toTime.print();
			break;
		default:
			process.stderr.write('Wrong instruction!\n');
	};
});