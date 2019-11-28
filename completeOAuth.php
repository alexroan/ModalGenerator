<?php

require_once './bootstrap.php';

try {

    // Try to get an access token using the authorization code grant.
    $accessToken = $provider->getAccessToken('authorization_code', [
        'code' => $_GET['code']
    ]);
    $_SESSION['accessToken'] = $accessToken->getToken();
    $_SESSION['userData'] 
        = $mailchimp->getMetaData("https://login.mailchimp.com/oauth2/metadata", $_SESSION['accessToken']);

    $email = $_SESSION['userData']['login']['email'];
    $accessToken = $_SESSION['accessToken'];    
    $_SESSION['partnerId'] = $database->insertPartner($email, $accessToken);

    header("Location: selectMailingList.php");

} catch (Exception $e) {

    // Failed to get the access token or user details.
    exit($e->getMessage());

}