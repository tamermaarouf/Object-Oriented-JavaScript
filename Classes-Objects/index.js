function SoftwareDeveloper() {
	'use strict';
	this.favoriteLanguage = 'JavaScript';
}

let developer = new SoftwareDeveloper();
console.log(developer);

function Hero(name, role){
	this.name = name;
	this.role= role;

	this.introduce = function() {
		console.log(`My name is ${this.name} and I am a ${this.role}`);
	}
}

let tamer = new Hero('Tamer', 'father');
