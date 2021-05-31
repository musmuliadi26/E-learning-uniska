var fakultass = {
	fakom : ['manajemen'],
	fakum : ['Ilmu hukum'],
	faksospol : ['administrasi Publik', 'Ilmu komunikasi'],
	fkip : ['Pendidikan Bahasa Inggris', 'Pendidikan Kimia', 'Bimbingan dan Konseling', 'Pendidikan Olahraga'],
	fkm : ['Kesehatan Masyarakat'],
	fakper : ['Agribisnis', 'Peternakan'],
	fsi : ['Hukum Ekonomi Syariah', 'Ekonomi Syariah', 'Pendidikan Guru Madrasah Ibtidiyah'],
	fatek : ['Teknik Elektro', 'Teknik Mesin', 'Teknik Industri', 'Teknik Sipil'],
	fti : ['Teknik Informatika', 'Sistem Informasi'],
	pascasarjana : ['Magister manajeman', 'Magister Ilmu komunikasi', 'Magister administrasi Publik', 'Magister Peternakan']
}


// getting the main and sub menus
var main = document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');


// trigger the Event when main manu change occurs
main.addEventListener('change', function() {


// getting a selected option
var selected_option = fakultass[this.value];


// removing the sub menu options using while loop
while(sub.options.length > 0) {

	sub.options.remove(0);
}



//conver the selected object into array and create a options for each array elements
//using option constructor it will create html element with the given value and innerText
Array.from(selected_option).forEach(function(el) {

	let option = new Option(el, el);

	// append the child option in sub menu
	sub.appendChild(option);

});

});