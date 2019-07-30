module.exports = class Unit {
	constructor (name) {
		this.name = name;
		this.health = 100;
		this.charge = 0;
	}

	get rechargeTime() {
		return (1000 * this.health/100);
	}
	get damage(){
		return this.health/100;
	}
	get criticalChance() {
		return 10 - this.health/10;
	}
}
