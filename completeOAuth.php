<?php

require_once './bootstrap.php';

try {

    // Try to get an access token using the authorization code grant.
    $accessToken = $provider->getAccessToken('authorization_code', [
        'code' => $_GET['code']
    ]);
    $_SESSION['accessToken'] = $accessToken->getToken();

    // Using the access token, we may look up details about the
    // resource owner.
    $resourceOwner = $provider->getResourceOwner($accessToken);

    // The provider provides a way to get an authenticated API request for
    // the service, using the access token; it returns an object conforming
    // to Psr\Http\Message\RequestInterface.
    $request = $provider->getAuthenticatedRequest(
        'GET',
        'https://login.mailchimp.com/oauth2/metadata',
        $accessToken->getToken()
    );
    $_SESSION['userData'] = $provider->getParsedResponse($request);

    header("Location: createModal.php");

} catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {

    // Failed to get the access token or user details.
    exit($e->getMessage());

}