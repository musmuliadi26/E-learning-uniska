function muatListKelas () {
	if(localStorage.data_kls_mhs && localStorage.id_kls_mhs){
		data_kls_mhs = JSON.parse(localStorage.getItem('data_kls_mhs'));
		var data_kls_mhs_app = '';

		if(data_kls_mhs.length > 0){
			data_kls_mhs_app = '<ul>';
			for(let i = 0; i < data_kls_mhs.length; i++){
				data_kls_mhs_app += '<li class="mb-2"><a href="#" class="list-perkuliahan"><i class="bi bi-journal-text me-2"></i>'+ data_kls_mhs[i].nama +'</a></li>';
			}
			data_kls_mhs_app += '</ul>';

			pratinjau_kls = '<ul class="fs-5">';
			for(let i = 0; i < data_kls_mhs.length; i++){
				pratinjau_kls += '<li class="mb-3">'+
									'<a class="list-matakuliah" href="#"><i class="bi bi-journal-text me-2"></i>'+ data_kls_mhs[i].nama +'</a>'+
									'<div class="progress ms-4">'+
									'<div class="progress-bar progress-bar-striped bg-secondary" role="progressbar" style="width: 5%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>'+
									'</div>'+
								'</li>';					
			}
			pratinjau_kls += '</ul>';

		}else {
			data_kls_mhs_app += 'tidak ada perkuliahan yang diikuti....';
		}

		$('#listp').html(data_kls_mhs_app);
		$('#listp').hide();
		$('#listp').fadeIn(100);
		$('#pratinjau-kelas').html(pratinjau_kls);
		$('#pratinjau-kelas').hide();
		$('#pratinjau-kelas').fadeIn(100);
	}
}

function gabungPerkuliahan(){
    namap = $('#namap').val();
    pass = $('#password').val();

    data_kelas = JSON.parse(localStorage.getItem('data_kelas'));
    for( i in data_kelas){
    	if( namap == data_kelas[i].nama && pass == data_kelas[i].password){
    		if (localStorage.data_kls_mhs && localStorage.id_kls_mhs){
		        data_kls_mhs = JSON.parse(localStorage.getItem('data_kls_mhs'));
		        id_kls_mhs = parseInt(localStorage.getItem('id_kls_mhs'));
		    }
		    else {
		        data_kls_mhs = [];
		        id_kls_mhs = 0;
		    }

		    id_kls_mhs ++;
		    data_kls_mhs.push({'id_kls_mhs':id_kls_mhs, 'nama':namap});
		    localStorage.setItem('data_kls_mhs', JSON.stringify(data_kls_mhs));
		    localStorage.setItem('id_kls_mhs', id_kls_mhs);
		    document.getElementById('form-gperkuliahan').reset();
		    gantiMenu('listp');
		    
		    return false;
    	}else{
    		document.getElementById('alert').classList.toggle('d-none');
    	}
    }  
}

function gantiMenu(menu){
    if (menu == "listp"){
        muatListKelas();
        $('#listp').fadeIn();
    }
}