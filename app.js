$(document).ready(function(){
	"use stict"
	var url = 'http://192.168.1.21:3000/places';
	$('#getPass').click(function(){
		$('#list').hide();
		$.get(url, function(name){
			for(var i= 0; i < url.length; i++) {
				$('#list').append('<li>'+ name.places[i].nom + '</li>'); 
				$('#pass').text(name.places[5].password);
			};
		});

		$.ajax({
			dataMeteo: "meteo toulouse",
			url : ' http://openweathermap.org',
			type : 'GET',
			dataType : 'HTML'
		
			});
	
			success :(function(meteo){
				$('#meteo').html(meteo);
		})
	});


});


