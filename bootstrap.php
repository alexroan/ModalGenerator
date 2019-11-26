<?php

session_start();
require './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

$provider = new \League\OAuth2\Client\Provider\GenericProvider([
    'clientId'                => getenv('CLIENT_ID'),    // The client ID assigned to you by the provider
    'clientSecret'            => getenv('CLIENT_SECRET'),   // The client password assigned to you by the provider
    'redirectUri'             => 'http://modalgenerator.local/createModal.php',
    'urlAuthorize'            => 'https://login.mailchimp.com/oauth2/authorize',
    'urlAccessToken'          => 'https://login.mailchimp.com/oauth2/token',
    'urlResourceOwnerDetails' => 'https://login.mailchimp.com/oauth2/metadata'
]);