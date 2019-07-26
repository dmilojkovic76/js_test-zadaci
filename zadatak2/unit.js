module.exports = class Unit {
	constructor (name) {
		this.name = name;
		this.health = 100;
	}

	get rechargeTime() {
		return this.calcRecharge();
	}
	get damage() {
		return this.calcDamage();
	}

	get criticalChance() {
		return this.calcCritical();
	}

	calcRecharge() {
		return (1000 * this.health/100);
	}

	calcDamage() {
		return (this.health/100);
	}

	calcCritical() {
		return (10 - this.health/10);
	}

	// TODO
	// Figure out how to atack and take damage
	// Not working
	atack(unit){
		unit.takeDamage(this.damage);
	}
	//Not Working
	set takeDamage(amount){
		this.health -= amount || 0;
	}
}
