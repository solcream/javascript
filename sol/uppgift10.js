(function() {
"use strict";

var state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded') , estimateTotal)
document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

var btnEstimate = document.getElementById();

btnEstimate.disable = true;

state.addEventListener("chance", function() {

if (state.value === "") {
btnEstimate.disable = true;
} else{
	btnEstimate.disable = false;
}  

});
});
function estimateTotal(event) {
	event.preventDefault();
	
if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}
}
