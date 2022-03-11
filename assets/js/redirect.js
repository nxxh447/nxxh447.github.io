(function() {
	sleep(2000).then(() => window.location.replace("https://savelife.in.ua/en/donate"))
	function sleep(ms) {
		return new Promise((res) => {
			setTimeout(res, ms);
		});
	}
})();

// actual redirect function
