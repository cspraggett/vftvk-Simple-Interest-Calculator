// Takes the currently selected interest rate and displays it next to the slider.
let updateRate = () => {
	let rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rateval + '%';
};

// Computes the interest earned based on the values selected.
let compute = () => {
	let principal = document.getElementById('principal').value;
	let rate = document.getElementById('rate').value;
	let years = document.getElementById('years').value;
	let interest = (principal * years * rate) / 100;
	let year = new Date().getFullYear() + parseInt(years);

	document.getElementById(
		'result'
	).innerHTML = `If you deposit \<mark\>${principal}\</mark\>,\<br\>at an interest rate of \<mark\>${rate}%\</mark\>\<br\>You will receive an amount of \<mark\>${interest}\</mark\>,\<br\>in the year \<mark\>${year}\</mark\>\<br\><br\>`;
};

// Validates the principal input's value
let checkPrincipal = () => {
	principal = document.getElementById('principal');
	if (!principal.value || principal.value <= 0) {
		alert('Enter a positive number');
		principal.focus();
		return false;
	}
	compute();
};
