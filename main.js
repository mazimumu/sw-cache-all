if(navigator.serviceWorker) {
	navigator
		.serviceWorker
		.register('sw2.js')
		.then(function(r) {
			console.log('Cats are now available offline');
		})
		.catch(function(e) {
			console.log('Cats are NOT available offline');
			console.log(e);
		});
} else {
	console.log('Service workers are not supported');
}