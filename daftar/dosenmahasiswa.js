var nipDosen = document.querySelector('.nip-dosen');
var npmMhs = document.querySelector('.npm-mhs');
var fakultas = document.querySelector('.fakultas');
var subFakultas = document.querySelector('.sub-fakultas');

function dosenMhs(isMhs) {
	if (isMhs) {
		nipDosen.classList.add('d-none');
		npmMhs.classList.remove('d-none');
		fakultas.classList.remove('d-none');
		subFakultas.classList.remove('d-none');
	}else {
		nipDosen.classList.remove('d-none');
		npmMhs.classList.add('d-none');
		fakultas.classList.add('d-none');
		subFakultas.classList.add('d-none');
	}
}