function muatDataKelas(){
	if (localStorage.data_kelas && localStorage.id_kelas) {
		data_kelas = JSON.parse(localStorage.getItem('data_kelas'));
		var data_kelas_app = '';

		if(data_kelas.length > 0){
			data_kelas_app = '<div class="table-responsive"><table class="table table-bordered text-center tabel-kelas">';
			data_kelas_app += '<thead>'+
									'<th>No.</th>'+
	                            	'<th>Nama Perkuliahan</th>'+
	                            	'<th>Password</th>'+
	                            	'<th colspan="3">aksi</th>'+
	                        	'</thead><tbody>';
	        for(let i = 0; i < data_kelas.length; i++){
	        	j = i + 1;

	        	localStorage.setItem('jumlahDataKelas', j);

	        	data_kelas_app += '<tr>';
	        	data_kelas_app += '<td>'+ j + '</td>'+
		             				 '<td>'+ data_kelas[i].nama + ' </td>'+
			                         '<td>'+ data_kelas[i].password + ' </td>'+
			                         '<td><a href="javascript:void(0)" onclick="hapusData(\''+data_kelas[i].id_kelas+'\')"><i class="bi bi-trash-fill text-danger p-3"></i></a></td>'+
		                             '<td><a href="javascript:void(0)" onclick="editData(\''+data_kelas[i].id_kelas+'\')"><i class="bi bi-pencil-fill text-success p-3"></i></a></td>';
                data_kelas_app += '</tr>';
	        }
	        data_kelas_app += '</tbody></table></div>';

	        list_kelas = '<ul class="fs-5">';
	        for(let i = 0; i < data_kelas.length; i++){
	        	list_kelas += '<li class="mb-3"><a class="list-matakuliah" href="#"><i class="bi bi-journal-text me-2"></i>'+ data_kelas[i].nama+'</a></li>';	
	        }
	        list_kelas += '</ul>'
		}else {
			data_kelas_app += 'Tidak ada perkuliahan yang dibuat...'
            data_kelas_app += 'Tidak ada perkuliahan yang dibuat...'
		}

		$('#list-perkuliahan').html(data_kelas_app);
		$('#list-kelas').html(list_kelas);
        $('#list-perkuliahan').hide();
        $('#list-kelas').hide();
        $('#list-perkuliahan').fadeIn(100);
        $('#list-kelas').fadeIn(100);
	}
}

function editData(id){	
  	if (localStorage.data_kelas && localStorage.id_kelas){
        data_kelas = JSON.parse(localStorage.getItem('data_kelas'));			
		idx_data = 0;
        for (i in data_kelas){
            if (data_kelas[i].id_kelas == id){
				$("#eid_perkuliahan").val(data_kelas[i].id_kelas);
				$("#enama").val(data_kelas[i].nama);
				$("#epassword").val(data_kelas[i].password);
				data_kelas.splice(idx_data, 1);
            }
            idx_data ++;
        }
		gantiMenu('edit-perkuliahan');
		
    }
	
}

function simpanPerkuliahan(){
    namap = $('#namap').val();
    pass = $('#password').val();
    
    if (localStorage.data_kelas && localStorage.id_kelas){
        data_kelas= JSON.parse(localStorage.getItem('data_kelas'));
        id_kelas = parseInt(localStorage.getItem('id_kelas'));
    }
    else {
        data_kelas = [];
        id_kelas = 0;
    }

    id_kelas ++;
    data_kelas.push({'id_kelas':id_kelas, 'nama':namap, 'password':pass});
    localStorage.setItem('data_kelas', JSON.stringify(data_kelas));
    localStorage.setItem('id_kelas', id_kelas);
    document.getElementById('form-perkuliahan').reset();
    gantiMenu('list-perkuliahan');
    
    return false;
}

function simpanEditPerkuliahan(){
    id_kelas = $('#eid_perkuliahan').val();
    namap = $('#enama').val();
    pass = $('#epassword').val();
    
    data_kelas.push({'id_kelas':id_kelas, 'nama':namap, 'password':pass});
    localStorage.setItem('data_kelas', JSON.stringify(data_kelas));
    document.getElementById('form-eperkuliahan').reset();
    gantiMenu('list-perkuliahan');
    
    return false;
}

function hapusData(id){
    if (localStorage.data_kelas && localStorage.id_kelas){
        data_kelas = JSON.parse(localStorage.getItem('data_kelas'));
        
        idx_data = 0;
        for (i in data_kelas){
            if (data_kelas[i].id_kelas == id){
                data_kelas.splice(idx_data, 1);
            }
            idx_data ++;
        }
       
        localStorage.setItem('data_kelas', JSON.stringify(data_kelas));
        muatDataKelas	();
    }
}

function gantiMenu(menu){
    if (menu == "list-perkuliahan"){
        muatDataKelas();
        $('#tambah-perkuliahan').fadeIn();
        $('#list-perkuliahan').fadeIn();
		$('#edit-perkuliahan').hide();
    }else if (menu == "tambah-perkuliahan"){
        $('#tambah-perkuliahan').fadeIn();
        $('#list-perkuliahan').hide();
		$('#edit-perkuliahan').hide();
    }else if (menu == "edit-perkuliahan"){
        $('#edit-perkuliahan').fadeIn();
        $('#tambah-perkuliahan').hide();
        $('#list-perkuliahan').hide();
    }
}