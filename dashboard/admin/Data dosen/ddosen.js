function muatDaftarData(){
	if(localStorage.daftar_data_dosen && localStorage.id_data_dosen){
		daftar_data_dosen = JSON.parse(localStorage.getItem('daftar_data_dosen'));
		var data_app = "";

		if(daftar_data_dosen.length > 0){
			data_app = '<table class="table table-bordered text-center tabel-dosen">';
			data_app += '<thead>'+
							'<th>No.</th>'+
                            '<th>nama</th>'+
                            '<th>NIP</th>'+
                            '<th>Jenis Kelamin</th>'+
                            '<th colspan="3">aksi</th>'+
                        '</thead><tbody>';
             for(let i = 0; i < daftar_data_dosen.length; i++ ){
             	j = i + 1;
             	data_app += '<tr>';
             	data_app += '<td>'+ j + '</td>'+
             				 '<td>'+ daftar_data_dosen[i].nama + ' </td>'+
	                         '<td>'+ daftar_data_dosen[i].nip + ' </td>'+
	                         '<td>'+ daftar_data_dosen[i].jkelamin + ' </td>'+
	                         '<td><a href="javascript:void(0)" onclick="hapusData(\''+daftar_data_dosen[i].id_data_dosen+'\')"><i class="bi bi-trash-fill text-danger p-3"></i></a></td>'+
                             '<td><a href="javascript:void(0)" onclick="editData(\''+daftar_data_dosen[i].id_data_dosen+'\')"><i class="bi bi-pencil-fill text-success p-3"></i></a></td>';
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
		
  	if (localStorage.daftar_data_dosen && localStorage.id_data_dosen){
        daftar_data_dosen = JSON.parse(localStorage.getItem('daftar_data_dosen'));			
		idx_data = 0;
        for (i in daftar_data_dosen){
            if (daftar_data_dosen[i].id_data_dosen == id){
				$("#eid_data_dosen").val(daftar_data_dosen[i].id_data_dosen);
				$("#enama").val(daftar_data_dosen[i].nama);
				$("#enip").val(daftar_data_dosen[i].nip);
                $("#ejKelamin").val(daftar_data_dosen[i].jkelamin);
				daftar_data_dosen.splice(idx_data, 1);
            }
            idx_data ++;
        }
		gantiMenu('edit-data');
		
    }
	
}
function simpanData(){
    nama = $('#nama').val();
    nip = $('#nip').val();
    jkelamin = $('#jKelamin').val();
    
    if (localStorage.daftar_data_dosen && localStorage.id_data_dosen){
        daftar_data_dosen = JSON.parse(localStorage.getItem('daftar_data_dosen'));
        id_data_dosen = parseInt(localStorage.getItem('id_data_dosen'));
    }
    else {
        daftar_data_dosen = [];
        id_data_dosen = 0;
    }

    id_data_dosen ++;
    daftar_data_dosen.push({'id_data_dosen':id_data_dosen, 'nama':nama, 'nip':nip, 'jkelamin': jkelamin});
    localStorage.setItem('daftar_data_dosen', JSON.stringify(daftar_data_dosen));
    localStorage.setItem('id_data_dosen', id_data_dosen);
    document.getElementById('form-data').reset();
    gantiMenu('list-data');
    
    return false;
}

function simpanEditData(){
    id_data_dosen = $('#eid_data_dosen').val();
    nama = $('#enama').val();
    nip = $('#enip').val();
    jkelamin = $('#ejKelamin').val();
    
    daftar_data_dosen.push({'id_data_dosen':id_data_dosen, 'nama':nama, 'nip':nip, 'jkelamin': jkelamin});
    localStorage.setItem('daftar_data_dosen', JSON.stringify(daftar_data_dosen));
    document.getElementById('eform-data').reset();
    gantiMenu('list-data');
    
    return false;
}

function hapusData(id){
    if (localStorage.daftar_data_dosen && localStorage.id_data_dosen){
        daftar_data_dosen = JSON.parse(localStorage.getItem('daftar_data_dosen'));
        
        idx_data = 0;
        for (i in daftar_data_dosen){
            if (daftar_data_dosen[i].id_data_dosen == id){
                daftar_data_dosen.splice(idx_data, 1);
            }
            idx_data ++;
        }
       
        localStorage.setItem('daftar_data_dosen', JSON.stringify(daftar_data_dosen));
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