$('document').ready(function(){
	$("#btn-send").click(function(){
		var data = $("#form-contact").serialize();			
		$.ajax({
			type : 'POST',
			url  : 'mailSend.php',
			data : data,
			dataType: 'json',
			beforeSend: function()
			{	
				$("#btn-send").html('Enviando ...');
			},
			success :  function(response){						
				if(response.codigo == '1'){	
					$("#btn-send").html('Enviar');
					$("#alert").css('display', 'block');
					$("#message").html('<strong>Sucesso! </strong>' + response.mensagem);
				}else{			
					$("#btn-send").html('Enviar');
					$("#alert").css('display', 'block');
					$("#message").html('<strong>Erro! </strong>' + response.mensagem);
				}
		    }
		});
	});
});