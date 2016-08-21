var articles;

function detectArticles(callback) {
	articles = document.getElementsByTagName("article");
	if (articles.isEmpty) { return; }
	callback();
}

function init() {
	detectArticles(function() {
	console.log(articles);
	});
}

window.onload = function() {
	console.log("extension initializing...")
	init();
}