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
var main = document.getElementById('main_fakultas');
var sub = document.getElementById('sub_fakultas');


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


// getting the main and sub menus
var emain = document.getElementById('emain_fakultas');
var esub = document.getElementById('esub_fakultas');

emain.addEventListener('change', function() {
    var selected_option = fakultass[this.value];
    while(esub.options.length > 0) {
        esub.options.remove(0);
    }
    Array.from(selected_option).forEach(function(el) {
        let option = new Option(el, el);
        esub.appendChild(option);

    });

});



function muatDaftarData(){
	if(localStorage.daftar_data_mhs && localStorage.id_data_mhs){
		daftar_data_mhs = JSON.parse(localStorage.getItem('daftar_data_mhs'));
		var data_app = "";

		if(daftar_data_mhs.length > 0){
			data_app = '<table class="table table-bordered text-center tabel-mhs">';
			data_app += '<thead>'+
							'<th>No.</th>'+
                            '<th>nama</th>'+
                            '<th>NPM</th>'+
                            '<th>Prodi</th>'+
                            '<th>Jenis Kelamin</th>'+
                            '<th colspan="3">aksi</th>'+
                        '</thead><tbody>';
             for(let i = 0; i < daftar_data_mhs.length; i++ ){
             	j = i + 1;

                localStorage.setItem("jmhDataMhs", j);
                
             	data_app += '<tr>';
             	data_app += '<td>'+ j + '</td>'+
             				 '<td>'+ daftar_data_mhs[i].nama + ' </td>'+
	                         '<td>'+ daftar_data_mhs[i].npm + ' </td>'+
	                         '<td>'+ daftar_data_mhs[i].prodi + ' </td>'+
	                         '<td>'+ daftar_data_mhs[i].jkelamin + ' </td>'+
	                         '<td><a href="javascript:void(0)" onclick="hapusData(\''+daftar_data_mhs[i].id_data_mhs+'\')"><i class="bi bi-trash-fill text-danger p-3"></i></a></td>'+
                             '<td><a href="javascript:void(0)" onclick="editData(\''+daftar_data_mhs[i].id_data_mhs+'\')"><i class="bi bi-pencil-fill text-success p-3"></i></a></td>';
                data_app += '</tr>';
             }
             data_app += '</tbody></table>';
		}else {
			data_app = "Tidak ada data...";
		}


		$('#list-data').html(data_app);
        $('#list-data').hide();
        $('#list-data').fadeIn(100);

	}
}

function editData(id){
		
  	if (localStorage.daftar_data_mhs && localStorage.id_data_mhs){
        daftar_data_mhs = JSON.parse(localStorage.getItem('daftar_data_mhs'));			
		idx_data = 0;
        for (i in daftar_data_mhs){
            if (daftar_data_mhs[i].id_data_mhs == id){
				$("#eid_data_mhs").val(daftar_data_mhs[i].id_data_mhs);
				$("#enama").val(daftar_data_mhs[i].nama);
				$("#enpm").val(daftar_data_mhs[i].npm);
				$("#esub_fakultas").val(daftar_data_mhs[i].prodi);
                $("#ejKelamin").val(daftar_data_mhs[i].jkelamin);
				daftar_data_mhs.splice(idx_data, 1);
            }
            idx_data ++;
        }
		gantiMenu('edit-data');
		
    }
	
}

function simpanData(){
    nama = $('#nama').val();
    npm = $('#npm').val();
    prodi = $('#sub_fakultas').val();
    jkelamin = $('#jKelamin').val();
    
    if (localStorage.daftar_data_mhs && localStorage.id_data_mhs){
        daftar_data_mhs = JSON.parse(localStorage.getItem('daftar_data_mhs'));
        id_data_mhs = parseInt(localStorage.getItem('id_data_mhs'));
    }
    else {
        daftar_data_mhs = [];
        id_data_mhs = 0;
    }

    id_data_mhs ++;
    daftar_data_mhs.push({'id_data_mhs':id_data_mhs, 'nama':nama, 'npm':npm, 'prodi':prodi, 'jkelamin': jkelamin});
    localStorage.setItem('daftar_data_mhs', JSON.stringify(daftar_data_mhs));
    localStorage.setItem('id_data_mhs', id_data_mhs);
    document.getElementById('form-data').reset();
    gantiMenu('list-data');
    
    return false;
}

function simpanEditData(){
    id_data_mhs = $('#eid_data_mhs').val();
    nama = $('#enama').val();
    npm = $('#enpm').val();
    prodi = $('#esub_fakultas').val();
    jkelamin = $('#ejKelamin').val();
    
    daftar_data_mhs.push({'id_data_mhs':id_data_mhs, 'nama':nama, 'npm':npm, 'prodi':prodi, 'jkelamin': jkelamin});
    localStorage.setItem('daftar_data_mhs', JSON.stringify(daftar_data_mhs));
    document.getElementById('eform-data').reset();
    gantiMenu('list-data');
    
    return false;
}

function hapusData(id){
    if (localStorage.daftar_data_mhs && localStorage.id_data_mhs){
        daftar_data_mhs = JSON.parse(localStorage.getItem('daftar_data_mhs'));
        
        idx_data = 0;
        for (i in daftar_data_mhs){
            if (daftar_data_mhs[i].id_data_mhs == id){
                daftar_data_mhs.splice(idx_data, 1);
            }
            idx_data ++;
        }
       
        localStorage.setItem('daftar_data_mhs', JSON.stringify(daftar_data_mhs));
        muatDaftarData();
    }
}


function gantiMenu(menu){
    if (menu == "list-data"){
        muatDaftarData();
        $('#tambah-data').fadeIn();
        $('#list-data').fadeIn();
		$('#edit-data').hide();
    }else if (menu == "tambah-data"){
        $('#tambah-data').fadeIn();
        $('#list-data').hide();
		$('#edit-data').hide();
    }else if (menu == "edit-data"){
        $('#edit-data').fadeIn();
        $('#tambah-data').hide();
        $('#list-data').hide();
    }
}




