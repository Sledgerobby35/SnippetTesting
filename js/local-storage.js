"use strict";
function storePetName(){
	var pet = prompt('Please enter your pets name');
	localStorage.setItem("petsName", pet);
}
function getPetName(){
	var pet = localStorage.getItem("petsName");
	return pet;
}
function bringItTogether(){
	if(localStorage.getItem("petsName") === null) {
		storePetName();
	}
	confirm(`Is your pets name still ${getPetName()}`);
}
bringItTogether();