var articles;

function detectArticles(callback) {
	articles = document.getElementsByTagName("article");
	if (articles.length == 0) { return; }
	callback();
}

function init() {
	detectArticles(function() {
	console.log(articles);
	});
}

window.onload = function() {
	init();
}