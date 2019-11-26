<?php

require_once './bootstrap.php';

setcookie('email', $_POST['email']);
setcookie('colour', $_POST['colour']);
setcookie('productName', $_POST['productName']);
setcookie('productImage', $_POST['productImage']);

// Fetch the authorization URL from the provider; this returns the
// urlAuthorize option and generates and applies any necessary parameters
// (e.g. state).
$authorizationUrl = $provider->getAuthorizationUrl();

// Get the state generated for you and store it to the session.
$_SESSION['oauth2state'] = $provider->getState();

// Redirect the user to the authorization URL.
header('Location: ' . $authorizationUrl);
exit;