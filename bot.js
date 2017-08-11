//Indicate file is running
console.log("Twitter bot starting");
var browserify = require('browserify')
//Reference and require twit package
var Twit = require('twit');
//Load Twitter Keys
var config = require('./config');
// console.log(config);
//Authenticate Twitter
var T = new Twit(config);
var params = {
	q: 'college',
	count: 2,
	verified: true
}

T.get('search/tweets', params, gotData);

function gotData (err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
}








