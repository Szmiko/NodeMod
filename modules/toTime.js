var os = require('os');

function toTime() {
	var time = os.uptime();
	var sec = time % 60;
	var min = (time / 60);
	var h = ((time / 60) / 60);

	if (time <= 60) {
		console.log('In Seconds: ~', time.toFixed(0), 'sec');
	} else if (time > 60 && time <= 3600) {
		console.log('In Minutes: ~', (time / 60).toFixed(0), 'min and ', (time % 60).toFixed(0), ' sec');
	} else if (time > 3600) {
		console.log('System work time: ~', ((time / 60) / 60).toFixed(0), 'h, ', ((time % 3600) / 60).toFixed(0), 'min and ', (time % 60).toFixed(0), ' sec');
	};
};

exports.print = toTime;