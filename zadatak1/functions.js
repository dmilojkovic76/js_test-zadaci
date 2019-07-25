/**
 * Funkcija random treba da vrati random broj koji je veci ili jednak sa min ili manji ili jednak sa max.
 * @param {Integer} min
 * @param {Integer} max
 * @returns {Integer}
 */
exports.random = (min, max) => {
	if (!min || !max || Number.isNaN(min) || Number.isNaN(max)) {
		return 'Greska! Ulazni parametri moraju biti tipa int!';
	} else if (Number.isInteger(min) && Number.isInteger(max)) {
		return Math.round(min + Math.random()*(max-min));
	}
}

/**
 * Vratiti najmanji broj koji se nalazi u nizu 'array'
 * @param {Array} array
 */
exports.minIntegerFromArray = (array) => {
	if (Array.isArray(array) && array.length > 5) {
		return array.filter((v) => Number.isInteger(v)).sort((a, b) => a-b)[0];
	}
	return false;
}

/**
 * Vrati najmanji od postojecih brojeva u stringu ili false ako nema brojeve
 * @param {string} string
 */
exports.minIntegerFromString = (string) => {
	if (string.length >= 10) {
		const nums = [];
		for(let i = 0; i < string.length - 1; i++){
			if (Number.isInteger(parseInt(string[i]))) {
				let currNum = string[i];
				for (let j = i + 1; j < string.length; j++) {
					if (Number.isInteger(parseInt(string[j]))) {
						currNum += string[j];
					} else {
						nums.push(parseInt(currNum));
						i = j;
						currNum = '';
						break;
					}
				}
			}
		}

		return nums.sort((a,b) => a-b)[0];
	}
	return 0;
}

exports.concatStringsByLength = (arrayOfStrings, type) => {
	return 0;
}