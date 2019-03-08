(function() {
"use strict";

document.getElementById(`cart.hplus`)addEventListener(`submit`, estimateTotal);

function estimateTotal(event) {
    event.prevenDefault();

    console.log(`You submitted the form.`);
}

})();