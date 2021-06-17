var btnMasuk = document.querySelector('.btn-masuk');

if(localStorage.getItem('theme') == 'tDark')
	setDarkMode()



function setDarkMode() {
	let iconDarkMode = '';
	let isdark = document.body.classList.toggle('dark');
	if (isdark) {
		iconDarkMode = '<h4><i class="bi bi-brightness-high-fill"></i></h4>';
		localStorage.setItem('theme', 'tDark');

	}else {
		iconDarkMode = '<h4><i class="bi bi-moon-fill"></i></h4>';
		localStorage.removeItem('theme');

	}
	document.getElementById('darkBtn').innerHTML = iconDarkMode;
}