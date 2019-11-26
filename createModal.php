<?php

require_once './bootstrap.php';
print_r(json_encode($_COOKIE));
print_r(json_encode($_SESSION));


$accessToken = $provider->getAccessToken('authorization_code', [
    'code' => $_GET['code']
]);
$resourceOwner = $provider->getResourceOwner($accessToken);

var_export($resourceOwner->toArray());