<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

$prova = $_REQUEST['prova'];

$users = [
	[
		"name" => "Giacomo",
		"surname" => "Alberini",
	],
	[
		"name" => "Alessandro",
		"surname" => "Caruso",
	],
];

$users[] = [
	"name" => $prova,
	"surname" => $prova,
];

echo json_encode($users);
