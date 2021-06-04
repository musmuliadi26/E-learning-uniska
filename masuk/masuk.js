localStorage.setItem('user-name', 'admin');
localStorage.setItem('pass-word', 'admin');

const formMasuk = document.querySelector('.form-masuk');
const alertLogin = document.querySelector('.alert-login');


function login() {
	const namaPengguna = document.querySelector('#username');
	const password = document.querySelector('#password');
	const alertLogin = document.querySelector('.alert-login');

	if(namaPengguna.value == localStorage.getItem('user-name') && password.value == localStorage.getItem('pass-word')){

		btnMasuk.setAttribute('href', '../dashboard/admin/graph/graph.html');
		console.log(btnMasuk);
	}else {
		alertLogin.classList.toggle('d-none');
	}

	formMasuk.reset();
}
