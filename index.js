
(function () {
	
	let burger = document.getElementById('burger');
	let fixed = document.getElementById('fixed');
	burger.addEventListener('click',func);
	function func() {
		
		fixed.classList.toggle('fixedtwo');
	}

})();
