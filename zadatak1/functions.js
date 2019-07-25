/**
 * Funkcija random treba da vrati random broj koji je veci ili jednak sa min ili manji ili jednak sa max.
 * @param {Integer} min
 * @param {Integer} max
 * @returns {Integer}
 */
const random = (min, max) => {
	if (!min || !max || Number.isNaN(min) || Number.isNaN(max)) {
		return 'Greska! Ulazni parametri moraju biti tipa int!';
	} else if (Number.isInteger(min) && Number.isInteger(max)) {
		return Math.round(min + Math.random()*(max-min));
	}
}

/**
 * Vratiti najmanji broj koji se nalazi u nizu
 * @param {Array} array
 * @returns - najmanji broj koji se nalazi u nizu array
 */
const minIntegerFromArray = (array) => {
	if (Array.isArray(array)) {
		console.log('works');
		return array.sort((a, b) => a-b)[0];
	}
}

const minIntegerFromString = (string) => {}

const concatStringsByLength = (arrayOfStrings, type) => {}

exports.random;
exports.minIntegerFromArray;
exports.minIntegerFromString;
exports.concatStringsByLength;

console.log(minIntegerFromArray([7, 1, 2]));
