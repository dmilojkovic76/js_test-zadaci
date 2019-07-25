const functions = require('./functions.js');
const config = require('./config.js');

console.log(`Parametri za 'random' funkciju: min=${config.random_min}, max=${config.random_max},
         Rezultat: ${functions.random(config.random_min, config.random_max)}`);

console.log(`Parametri za 'minIntegerFromArray' funkciju: array=${config.minArray},
         Rezultat: ${functions.minIntegerFromArray(config.minArray)}`);

console.log(`Parametri za 'minIntegerFromString' funkciju: string=${config.minIntString},
         Rezultat: ${functions.minIntegerFromString(config.minIntString)}`);
		 
console.log(`Parametri za 'concatStringsByLength' funkciju: array=${config.concatString}, type=${config.concatType}
         Rezultat: ${functions.concatStringsByLength(config.concatString, config.concatType)}`);