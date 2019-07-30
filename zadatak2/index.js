const Unit = require('./unit.js');

const units = [];
const doublers = {};
let ucesnici = '';

const attack = async (attacker, defender) => {
	const criticalChanceCond =  Math.round(Math.random() * 100);

	if (criticalChanceCond >= attacker.criticalChance) {
		defender.health -= attacker.damage * 2;
		doublers[attacker.name] += 1;
	} else {
		defender.health -= attacker.damage;
	}
	attacker.rechargeTime = 0;
};

for (let i = 1, n = Math.round(1 + Math.random() * 4); i <= n; i++){
	units.push(new Unit(`Unit ${i}`));
	doublers[`Unit ${i}`] = 0;
}

console.log(`Ucesnici (${units.length}): `);
for (let i = 0, n = units.length; i < n; i++) {
	ucesnici += units[i].name + ' ';
}
console.log(ucesnici);

while (units.length >= 2) {

	for (let i = 0; i < units.length; i++) {
		if (units[i].charge < units[i].rechargeTime) {
			units[i].charge += 1;
		} else {
			if (units[i].health > 0) {
				const rnd = Math.floor(Math.random() * units.length);
				attack(units[i], units[rnd]);
				units[i].charge = 0;
			}
		}

	}
	// console.log(units);

	for(let i = units.length - 1; i >= 0; i-- ) {

		if (units[i].health <= 0) {
			console.log(`${units[i].name} - MRTAV!`);
			units.splice(i, 1);
		}
	}

}

console.log(`KRAJ IGRE! Pobednik je ${units[0].name}`);
console.log('Double Damage iskoristili: ');
console.log(doublers);
