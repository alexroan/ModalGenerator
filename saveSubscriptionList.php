<?php

require_once './bootstrap.php';

$accessToken = $_SESSION['accessToken'];
$email = $_POST['email'];
$partnerId = $_POST['partnerId'];
$listId = $_POST['listId'];

$update = $database->updateListId($partnerId, $email, $accessToken, $listId);

print_r($update);