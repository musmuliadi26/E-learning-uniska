var navbar = document.querySelector('.navbar');
var btnMode = document.querySelector('.btn-mode');
var btnUser = document.querySelector('.btn-user');
var btnMasuk = document.querySelector('.btn-masuk');
var btnBuatAkun = document.querySelector('.btn-buat-akun');


if(localStorage.getItem('theme') == 'tDark')
	darkmode(true)

function darkmode(isdark) {
	if (isdark) {
		localStorage.setItem('theme', 'tDark');

		document.body.setAttribute('id', 'dark');

		btnMode.classList.remove('bg-light');
		btnMode.classList.add('bg-secondary');

		btnUser.classList.remove('bg-light');
		btnUser.classList.add('bg-secondary');

		navbar.classList.remove('navbar-light');
		navbar.classList.add('navbar-dark');
		

		btnMasuk.classList.remove('bg-light');
		btnMasuk.classList.add('bg-secondary');

		btnBuatAkun.classList.remove('bg-light');
		btnBuatAkun.classList.add('bg-secondary');

	}else {
		localStorage.setItem('theme', '');

		document.body.setAttribute('id', '');

		btnMode.classList.remove('bg-secondary');
		btnMode.classList.add('bg-light');

		btnUser.classList.remove('bg-secondary');

		navbar.classList.remove('navbar-dark');
		navbar.classList.add('navbar-light');
		localStorage.setItem('theme', '');


		btnMasuk.classList.remove('bg-secondary');
		btnMasuk.classList.add('bg-light');

		btnBuatAkun.classList.remove('bg-secondary');
		btnBuatAkun.classList.add('bg-light');

	}
}