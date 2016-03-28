if(navigator.serviceWorker) {
	navigator
		.serviceWorker
		.register('sw3.js')
		.then(function(r) {
			console.log('SW are now available offline');
		})
		.catch(function(e) {
			console.log('SW are NOT available offline');
			console.log(e);
		});
} else {
	console.log('Service workers are not supported');
}