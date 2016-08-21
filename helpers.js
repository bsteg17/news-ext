// Extend Array

Array.prototype.isEmpty = function() {
	if (this.length == 0) { return true; } 
	else                  { return false; }
}

// Extend HTMLCollection

HTMLCollection.prototype.toArray = function() {
	return Array.prototype.slice.call( this );
}

//Extend String

String.prototype.splitButKeepSeperators = function (seperator) {
	parts = this.split(seperator);
	for (i= parts.length; i-->1;)
    	parts.splice(i, 0, seperator);
    return parts;
}

// misc

function LOG(str) {
	console.log(str);
}
