$(document).ready(function(){
	"use stict"
	var url = 'http://192.168.1.21:3000/places';
	var meteo = 'http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=e05300d9bacf77c059ab39927fd4909d';
	$('#getPass').click(function(){
		$.get(url, function(name){
			for(var i= 0; i < url.length; i++) {
				$('#list').append('<li>'+ name.places[i].nom + '</li>'); 
				$('#pass').text(name.places[5].password);
			};
		});
	});

	$('#weather').click(function(){
		$.get(meteo, function(data){
			for(var i= 0; i < meteo.length; i++) {
				$('#infos').text(data);
			};
		});	



	});
});


