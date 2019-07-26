const Unit = require('./unit.js');

const units = [];

for (let i = 1, n = Math.round(1 + Math.random() * 4); i <= n; i++){
	units.push(new Unit(`unit${i}`));
}

while (units.length >= 2) {

	for (let i = units.length - 1; i > 0; i--){
		if (units[i].health === 0) {
			units.splice(i, 1);
		}
	}

	const rnd1 = Math.round(Math.random() * units.length);
	const rnd2 = Math.round(Math.random() * units.length);
	units[rnd1].atack(units[rnd2]);
	units[rnd1].rechargeTime = 0;

}

console.log('KRAJ IGRE!');
console.log(`Pobednik je ${units[0].name}`);


