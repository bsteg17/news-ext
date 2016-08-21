var articles;

function detectArticles(callback) {
	log("detecting articles...")
	articles = document.getElementsByTagName("article");
	if (articles.isEmpty) { return; }
	callback();
}

// function tokenizeArticles() {

// }

function init() {
	detectArticles(function() {
	// tokenizeArticles(function() {
	console.log(articles);
	// })
	});
}

window.onload = function() {
	log("extension initializing...")
	init();
}