// Extend Array

Array.prototype.isEmpty = function() {
	if (this.length == 0) { return true; } 
	else                  { return false; }
}

Array.prototype.hasIndex = function(i) {
	if (i > 0 && i < this.length) { return true; }
	else                          { return false; }
}

// Extend HTMLCollection

HTMLCollection.prototype.toArray = function() {
	return Array.prototype.slice.call( this );
}

//Extend String

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}

String.prototype.hasIndex = function(i) {
	if (i > 0 && i < this.length) { return true; }
	else                          { return false; }
}

String.prototype.tokenizeSentences = function () {
	tokens = [];
	currentToken = "";
	for (i = 0; i < this.length; i++) {
		currentToken += this[i];
		if (endOfSentence(this, i)) {
			tokens.push(currentToken);
			this[i + 1] = "";
		}
	}
	tokens.push(currentToken);
}

//tokenizing sentences

function endOfSentence(str, i) {
	if (!this.hasIndex(i + 1)) {
		return false;
	}
	if (!this[i].match(/[.?!;]/) {
		return false;
	}
	if (!this[i + 1].match(/[\s\n]/)) {
		return false;
	}
	if (followsNumerals(this, i) || followsMrMrsEtc(this, i) || isEndOfAbbreviation(this, i)
	 || isEndOfEllipsis(this, i)) {
		return false;
	}
	return true;
}

function followsMrMrsEtc(str, i) {
	titles = ["Mr", "Mrs", "Ms", "Dr"];
	titles.forEach(function(title) {
		if (str.substr(i, i - title.length) == title) {
			return true;
		}
	});
	return false;
}

function isEndOfAbbreviation(str, i) {
	if (!str.hasIndex(i - 2)) {
		if (str.hasIndex(i - 1)) { return true; }
		else  { return false; }
	}
	if (str[i - 2])
}

function isEndOfEllipsis(str, i) {
	
}

// misc

function LOG(str) {
	console.log(str);
}