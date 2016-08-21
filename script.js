var articles;

function detectArticles(callback) {
	LOG("detecting articles...")
	articles = document.getElementsByTagName("article")
	  .toArray()
	  .map(function(article) {return {"element":article}});
	if (articles.isEmpty()) { return; }
	callback();
}

function extractArticleText(callback) {
	LOG("extracting article text from html...")
	articles.forEach(function(article) {
        article.text = article.element.textContent;
	});
	callback();
}

function tokenizeArticleText() {
	LOG("tokenizing articles...")
	articles.forEach(function(article) {
		LOG(article.text)
		article.sentences = article.text.splitButKeepSeperators(/[.!?"] /);
		LOG(article.sentences);
	});
}

function init() {
	detectArticles(function() {
	extractArticleText( function() {
	tokenizeArticleText(function() {
	LOG(articles);
	}) }) });
}

window.onload = function() {
	LOG("extension initializing...")
	init();
}