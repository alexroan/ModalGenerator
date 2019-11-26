<?php
session_start();
require_once '../app/HeadScriptGenerator.php';
require_once '../app/MailchimpRegistrar.php';

$email = filter_var($_GET['email'], FILTER_SANITIZE_EMAIL);
$productName = filter_var($_GET['productName'], FILTER_SANITIZE_STRING);
$productImage = filter_var($_GET['productImage'], FILTER_SANITIZE_STRING);

$generator = new HeadScriptGenerator();
$filePath = $generator->generateHeadScript($email, $productName, $productImage);
$filePath = ltrim($filePath, '.');
echo "<script src='http://modalgenerator.local$filePath'></script>";

$mailchimp = new MailchimpRegistrar();
echo $mailchimp->envVar('CLIENT_ID');
