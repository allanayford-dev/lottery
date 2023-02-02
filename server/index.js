var cron = require('node-cron');

cron.schedule('* * * * *', () => {
	console.log('running every minute.');
});
