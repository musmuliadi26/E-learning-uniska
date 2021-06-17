var navLink = document.querySelectorAll('.nav-link');
var btnUser = document.querySelector('.btn-user');
var btnMasuk = document.querySelector('.btn-masuk');
var btnBuatAkun = document.querySelector('.btn-buat-akun');


if(localStorage.getItem('theme') == 'tDark')
	setDarkMode()



function setDarkMode() {
	let iconDarkMode = '';
	let isdark = document.body.classList.toggle('dark');
	if (isdark) {
		iconDarkMode = '<h4><i class="bi bi-brightness-high-fill"></i></h4>';
		localStorage.setItem('theme', 'tDark');

		// for (var i = 0; i <= navLink.length; i++) {
		// 	navLink[i].classList.toggle('text-white');
		// }

		// btnUser.classList.remove('bg-light');
		// btnUser.classList.add('bg-secondary');		

		 // btnMasuk.classList.toggle('btn-secondary');

		// btnBuatAkun.classList.remove('bg-light');
		// btnBuatAkun.classList.add('bg-secondary');

	}else {
		iconDarkMode = '<h4><i class="bi bi-moon-fill"></i></h4>';
		localStorage.removeItem('theme');

		// for (var i = 0; i <= navLink.length; i++) {
		// 	navLink[i].classList.toggle('text-white');
		// }

		// btnUser.classList.remove('bg-secondary');

		// btnMasuk.classList.remove('bg-secondary');
		// btnMasuk.classList.add('bg-light');

		// btnBuatAkun.classList.remove('bg-secondary');
		// btnBuatAkun.classList.add('bg-light');

	}
	document.getElementById('darkBtn').innerHTML = iconDarkMode;
}