chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		// Placeholder player array for now, will figure out what to put later
		var playerNames = [];


		// Looks at page and replace every occurance of the known playerName with "teemo"
	}
	}, 10);
});