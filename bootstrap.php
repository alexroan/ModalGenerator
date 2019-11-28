<?php

session_start();
require './vendor/autoload.php';
require_once './app/Mailchimp.php';
require_once './app/DatabaseConnection.php';
require_once './app/Database.php';
require_once './app/YamlReader.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();
$appEnv = getenv('APP_ENV');

$provider = new \League\OAuth2\Client\Provider\GenericProvider([
    'clientId'                => getenv('CLIENT_ID'),    // The client ID assigned to you by the provider
    'clientSecret'            => getenv('CLIENT_SECRET'),   // The clieant password assigned to you by the provider
    'redirectUri'             => 'http://modalgenerator.local/completeOAuth.php',
    'urlAuthorize'            => 'https://login.mailchimp.com/oauth2/authorize',
    'urlAccessToken'          => 'https://login.mailchimp.com/oauth2/token',
    'urlResourceOwnerDetails' => 'https://login.mailchimp.com/oauth2/metadata'
]);

$mailchimp = new Mailchimp($provider);

//get db values
$yaml = new YamlReader();
$values = $yaml->readFile(__DIR__.'/phinx.yml', $appEnv);

//create database connection
$dbConnection = new DatabaseConnection($values);
$database = new Database($dbConnection);