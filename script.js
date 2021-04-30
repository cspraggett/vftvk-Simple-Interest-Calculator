function checkPrincipal() {
	principal = document.getElementById('principal');
	if (principal.value <= 0) {
		alert('Enter a positive number');
		principal.focus();
	}
}

function updateRate() {
	let rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rateval + '%';
}

function compute() {
	let principal = document.getElementById('principal').value;
	let rate = document.getElementById('rate').value;
	let years = document.getElementById('years').value;
	let interest = (principal * years * rate) / 100;
	let year = new Date().getFullYear() + parseInt(years);

	checkPrincipal();
	document.getElementById(
		'result'
	).innerHTML = `If you deposit \<mark\>${principal}\</mark\>,\<br\>at an interest rate of \<mark\>${rate}%\</mark\>\<br\>You will receive an amount of \<mark\>${interest}\</mark\>,\<br\>in the year \<mark\>${year}\</mark\>\<br\>`;
}
