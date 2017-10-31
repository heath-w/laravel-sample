var zipInput = document.getElementById( 'zipInput' );
var weatherButton = document.getElementById( 'weatherButton' );
var error = document.getElementById( 'error' );
var output = document.getElementById( 'output' );
var errorMessage = document.getElementById( 'errorMessage' );
var outputMessageCity = document.getElementById( 'outputMessageCity' );
var outputMessageKelvinTemp = document.getElementById( 'outputMessageKelvinTemp' );
var outputMessageFarenheitTemp = document.getElementById( 'outputMessageFarenheitTemp' );
var outputMessageCelsiusTemp = document.getElementById( 'outputMessageCelsiusTemp' );
var outputMessageCondition = document.getElementById( 'outputMessageCondition' );
var outputPic = document.getElementById( 'outputPic' );
var apiRequest;

document.onreadystatechange = function() {
	if ( document.readyState === 'interactive' ) {		
		weatherButton.onclick = getWeather;
	}
};

function getWeather() {
	var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=95fcd1f957be83fbd4972e941c94f9c9&zip=<zipcode_value>';

	console.log( 'baseUrl: %s', baseUrl );
	console.log( 'zipInput: %s', zipInput.value );

	var url = baseUrl.replace( '<zipcode_value>', zipInput.value );
	console.log( 'url: %s', url );

	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open( 'GET', url, true );
	apiRequest.send();



// api.openweathermap.org/data/2.5/weather?zip=40502

}

function catchResponse() {
	console.log( apiRequest );
	// console.log( apiRequest.response );
	// var responseData = JSON.parse( apiRequest.response );
	// console.log( responseData );

	var responseData = JSON.parse( apiRequest.response );
	console.log( responseData );

	if ( apiRequest.status === 200 ) {
		console.log( 'Good Request: %s', apiRequest.statusText );

		error.style.display = 'none';
		errorMessage.innerHTML = '';	

		// Kelvin to F
		// T(°F) = T(K) × 9/5 - 459.67

		// Kelvin to C
		// T(°C) = T(K) - 273.15

		outputMessageCity.innerHTML = responseData.name;
		outputMessageKelvinTemp.innerHTML = outputMessageKelvinTemp.innerHTML.replace( '<temp>', responseData.main.temp );
		outputMessageFarenheitTemp.innerHTML = outputMessageFarenheitTemp.innerHTML.replace( '<temp>', kelvinToF( responseData.main.temp ) );
		outputMessageCelsiusTemp.innerHTML = outputMessageCelsiusTemp.innerHTML.replace( '<temp>', kelvinToC( responseData.main.temp ) );
		outputMessageCondition.innerHTML = responseData.weather[ 0 ].description;
		outputPic.innerHTML = '!!!';
		output.style.display = 'block';	
	}
	else {
		console.log( 'Bad Request: %s', apiRequest.statusText );
		
		errorMessage.innerHTML = responseData.message;	
		error.style.display = 'block';

		output.style.display = 'none';
		outputMessageCity.innerHTML = '';
		outputMessageKelvinTemp.innerHTML = '';
		outputMessageFarenheitTemp.innerHTML = '';
		outputMessageCelsiusTemp.innerHTML = '';
		outputMessageCondition.innerHTML = '';
		outputPic.innerHTML = '';
	}
}

function httpRequestOnError() {
	console.log( 'Request is NOT COOL!' );
	console.log( apiRequest );
}

function kelvinToC( k ) {
	// Kelvin to C
	// T(°C) = T(K) - 273.15

	return Math.round( ( ( k - 273.15 ) * 100 ) ) / 100;
}

function kelvinToF( k ) {
	// Kelvin to F
	// T(°F) = T(K) × 9/5 - 459.67

	return Math.round( ( ( ( k * ( 9 / 5 ) ) - 459.67 ) * 100 ) ) / 100;
}

function weatherPicture( temp ) {
	if ( temp > 95 ) {

	}
	else if ( temp > 85 ) {
		
	}
	else if ( temp > 75 ) {
		
	}
	else if ( temp > 65 ) {
		
	}
	else if ( temp > 32 ) {
		
	}
	else {

	}
}
//http://http://api.openweathermap.org/data/2.5/weather?zip=40517&APPID=95fcd1f957be83fbd4972e941c94f9c9