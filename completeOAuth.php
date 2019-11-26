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

    header("Location: createModal.php");

} catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {

    // Failed to get the access token or user details.
    exit($e->getMessage());

}