// admin
localStorage.setItem('user-admin', 'admin');
localStorage.setItem('pass-admin', 'admin');

// dosen
localStorage.setItem('user-dosen', 'dosen');
localStorage.setItem('pass-dosen', 'dosen');

// mahasiswa
localStorage.setItem('user-mhs', 'musmuliadi');
localStorage.setItem('pass-mhs', 'sembarang');

const formMasuk = document.querySelector('.form-masuk');
const alertLogin = document.querySelector('.alert-login');


function login() {
	const namaPengguna = document.querySelector('#username');
	const password = document.querySelector('#password');
	const alertLogin = document.querySelector('.alert-login');

	if(namaPengguna.value == localStorage.getItem('user-admin') && password.value == localStorage.getItem('pass-admin')){

		btnMasuk.setAttribute('href', '../dashboard/admin/graph/graph.html');

	}else if(namaPengguna.value == localStorage.getItem('user-dosen') && password.value == localStorage.getItem('pass-dosen')){
		btnMasuk.setAttribute('href', '../dashboard/users dosen/users-dosen.html');

	}else if(namaPengguna.value == localStorage.getItem('user-mhs') && password.value == localStorage.getItem('pass-mhs')){
		btnMasuk.setAttribute('href', '../dashboard/users mahasiswa/users-mhs.html');

	}else {
		alertLogin.classList.toggle('d-none');
	}

	formMasuk.reset();
}
