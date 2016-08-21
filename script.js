var articles;

function detectArticles(callback) {
	LOG("detecting articles...")
	articles = document.getElementsByTagName("article");
	if (articles.isEmpty) { return; }
	callback();
}

function tokenizeArticles() {

}

function init() {
	detectArticles(function() {
	tokenizeArticles(function() {
	LOG(articles);
	})
	});
}

window.onload = function() {
	LOG("extension initializing...")
	init();
}