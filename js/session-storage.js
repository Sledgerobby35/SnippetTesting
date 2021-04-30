"use strict";
askForName();

function storeMyName(name) {
	name = prompt("Please Enter Your Full Name");
	sessionStorage.setItem("name", name);
}

function getMyName() {
	var myName = sessionStorage.getItem("name");
	alert(`Welcome back, ${myName}`);
}

function askForName() {
	if(sessionStorage.getItem("name") === null || sessionStorage.getItem("name") === undefined) {
		storeMyName();
	}
	getMyName();
}
