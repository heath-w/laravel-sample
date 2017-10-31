<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/test', function () {
	return "hello from the routes/web.php file!";
});

Route::get('/portfolio/js/weather', function () {
	// return view('js-weather.index', [ 'default' => '41501' ] );

	// $default = "40502";
	// return view('js-weather.index', [ 'default' => $default ] );

	$default = "60007";
	return view('js-weather.index', compact('default') );	
});