<!DOCTYPE html>
<html>

<head>
	<title>Awesome Weather</title>

	<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


	<link rel="stylesheet" type="text/css" href="/js-weather/style.css">
	

</head>

<body class="container">

	<div style="margin-top: 15px;">
		<a href="/">Home</a>
	</div>
	
	<h1>Awesome Weather</h1>

	<div id="inputForm" class="form-inline">
		<input type="number" class="form-control" id="zipInput" name="zipInput" placeholder="zipcode">
		<button type="button" class="btn btn-success" id="weatherButton" onclick="console.log('rrt'); getWeather();">Get Weather</button>
	</div>

	<div id="error" class="panel panel-danger">
		<div class="panel-heading">
			<h3 class="panel-title">Error</h3>
		</div>
		<div class="panel-body">
			<p id="errorMessage"></p>			
		</div>
	</div>

	<div id="output" class="panel panel-info">

		<div class="panel-heading">
			<h3 class="panel-title">City</h3>
		</div>
		<div class="panel-body">
			<p id="outputMessageCity"></p>
		</div>

		<div class="panel-heading">
			<h3 class="panel-title">Temperature</h3>
		</div>
		<div class="panel-body">
			<table class="table">
				<tr>
					<td>
						<p id="outputMessageKelvinTemp"><temp> &deg; K</p>
					</td>
					<td>
						<p id="outputMessageFarenheitTemp"><temp> &deg; F</p>
					</td>
					<td>
						<p id="outputMessageCelsiusTemp"><temp> &deg; C</p>
					</td>
				</tr>
			</table>
		</div>

		<div class="panel-heading">
			<h3 class="panel-title">Condition</h3>
		</div>
		<div class="panel-body">
			<p id="outputMessageCondition">
			</p>			
		</div>

		<div class="panel-heading">
			<h3 class="panel-title">Temperature in Pictures</h3>
		</div>
		<div class="panel-body">
			<img id="outputPic"></img>
		</div>

	</div>

<script type="text/javascript" src="/js-weather/main.js"></script>

</body>

</html>
