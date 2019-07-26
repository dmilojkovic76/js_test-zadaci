/**
 * Funkcija random treba da vrati random broj koji je veci ili jednak sa min ili manji ili jednak sa max.
 * @param {Integer} min
 * @param {Integer} max
 * @returns {Integer}
 */
exports.random = (min, max) => {
	if (Number.isInteger(min) && Number.isInteger(max)) {
		return Math.round(min + Math.random()*(max-min));
	}
	return 'Greska! Ulazni parametri moraju biti tipa int!';
}

/**
 * Vratiti najmanji broj koji se nalazi u nizu 'array'
 * @param {Array} array
 */
exports.minIntegerFromArray = (array) => {
	if (Array.isArray(array) && array.length > 5) {
		const r = array.filter((v) => Number.isInteger(v)).sort((a, b) => a-b)[0];
		return Number.isInteger(r) ? r : 'Neispravni parametri unosa niza';
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
		const r = nums.sort((a,b) => a-b)[0];
		return r ? r : false;
	}
	return false;
}

/**
 * Vrati sve stringove koji su uneti spojene u jedan, ali po odredjenom redosledu.
 * Ako je type = 0 onda po rastucem ako je 1 onda po opadajucem redosledu
 * @param {Array} arrayOfStrings
 * @param {Number} type
 * @function concatStringsByLength
 */
exports.concatStringsByLength = (arrayOfStrings, type) => {
	console.log(type);

	if (type === 0 || type === 1) {

		switch (type) {
			case 0:

				return arrayOfStrings.sort((a, b) => a.length-b.length).join('');
				break;

			case 1:

				return arrayOfStrings.sort((a, b) => b.length-a.length).join('');
				break;

			default:
				break;
		}
	}

	return 'Neispravan unos ulaznih parametara';
}
