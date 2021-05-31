var navbar = document.querySelector('.navbar');
var btnMode = document.querySelector('.btn-mode');
var btnMasuk = document.querySelector('.btn-masuk');
var btnBuatAkun = document.querySelector('.btn-buat-akun');


if(localStorage.getItem('theme') == 'tDark')
	darkmode(true)

function darkmode(isdark) {
	if (isdark) {
		document.body.setAttribute('id', 'dark');

		btnMode.classList.remove('bg-light');
		btnMode.classList.add('bg-secondary');

		navbar.classList.remove('navbar-light');
		navbar.classList.add('navbar-dark');
		localStorage.setItem('theme', 'tDark');


		btnMasuk.classList.remove('bg-light');
		btnMasuk.classList.add('bg-secondary');

		btnBuatAkun.classList.remove('bg-light');
		btnBuatAkun.classList.add('bg-secondary');

	}else {
		document.body.setAttribute('id', '');

		btnMode.classList.remove('bg-secondary');
		btnMode.classList.add('bg-light');

		navbar.classList.remove('navbar-dark');
		navbar.classList.add('navbar-light');
		localStorage.setItem('theme', '');


		btnMasuk.classList.remove('bg-secondary');
		btnMasuk.classList.add('bg-light');

		btnBuatAkun.classList.remove('bg-secondary');
		btnBuatAkun.classList.add('bg-light');

	}
}