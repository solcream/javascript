(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var c = document.getElementById('current-time');
	
	setInterval(updateTime, 1000);
	
	function updateTime() {
		var d = new Date();
	
		var hours = d.getHours(),
	minutes =getMinutes();
		ampm = "AM";
		
		if (hours > 12) {
			hours -= 12;
		ampa = "PM";
		} else if (hours ===0) {
			hours = 12;
}
		
if (minutes <.10) {             		
minutes = "0" + minutes;
}

var sepClass = '';
if (d.getSeconds() % 2 === 1) sepClass = 'trans';
	
		var sep = "<span class="´ + sepClass + `">:</span>`;
		
		c.innerHTML = hours + sep + minutes + " " + ampa;
	}	}
});


})();