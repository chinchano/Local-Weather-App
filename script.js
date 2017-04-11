$(document).ready(function() {
	//Get User's location

	
	$.get("http://ipinfo.io", function(response) {
		var location = response.city;
		var country = response.country;
	
function showWeather(){
	//$("#getWeather").on("click", function() {
			$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&APPID=06f6014256dc4b27b9dbfa0a75429e71", function(response) {
				console.log(response);

				var icon = response.weather[0].icon;
				var iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
				var temp = response.main.temp;
				var roundedTemp = Math.round(temp);

				var html = "";
				html = document.getElementById('weatherText').innerHTML = response.name + ',' + country;
				html = document.getElementById('temp').innerHTML = roundedTemp + "° F";
				html = document.getElementById('weatherCondition').innerHTML = response.weather[0].description;
				html = document.getElementById('icon').innerHTML = '<img src=' + iconUrl + '>';


				//Fahrenheit-Celsius toggle
				$('#formatChange').on('click', function() {
					$('#formatChange').toggleClass('celcius');
					$('#formatChange').toggleClass('fahrenheit');

					if ($(this).hasClass('fahrenheit')) {
						$('#formatChange').text(setCelcius());
						return;
					}

					$('#formatChange').text(setFahrenheit());
				});

				function setCelcius() {
					var html = "";
					var roundedTemp = Math.round(temp);
					var cel = (roundedTemp - 32) * 5 / 9;
					var roundedCel = Math.round(cel);
					html = document.getElementById('temp').innerHTML = roundedCel + "° C";
				};

				function setFahrenheit() {
					var html = "";
					html = document.getElementById('temp').innerHTML =  roundedTemp + "° F";
				};
				
			});


		//});
}
showWeather();

	}, "jsonp");

});


//Add on load function before on click
