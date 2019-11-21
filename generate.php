<?php
session_start();
require_once './HeadScriptGenerator.php';

$email = filter_var($_GET['email'], FILTER_SANITIZE_EMAIL);
$productName = filter_var($_GET['productName'], FILTER_SANITIZE_STRING);
$productImage = filter_var($_GET['productImage'], FILTER_SANITIZE_STRING);

$generator = new HeadScriptGenerator();
$filePath = $generator->generateHeadScript($email, $productName, $productImage);
$filePath = ltrim($filePath, '.');
echo "<script src='http://modalgenerator.local$filePath'></script>";
