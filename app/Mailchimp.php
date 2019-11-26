<?php

require __DIR__.'./../vendor/autoload.php';

use \League\OAuth2\Client\Provider\AbstractProvider;

class Mailchimp {

    const HTTP_GET = 'GET';

    /**
     * OAuth provider
     *
     * @var \League\OAuth2\Client\Provider\AbstractProvider
     */
    private $provider;

    /**
     * Create a new Mailchimp class with an abstract provider
     *
     * @param AbstractProvider $provider
     */
    function __construct(AbstractProvider $provider) {
        $this->provider = $provider;
    }

    /**
     * Get metadata for oauth
     *
     * @param string $fullUrl
     * @param string $accessToken
     * @return array response
     */
    public function getMetaData(string $fullUrl, string $accessToken) {
        return $this->authenticatedRequest(self::HTTP_GET, $fullUrl, $accessToken);
    }

    /**
     * Get lists
     *
     * @param string $baseUrl
     * @param string $accessToken
     * @return array response
     */
    public function getLists(string $baseUrl, string $accessToken) {
        $url = $baseUrl . '/3.0/lists';
        return $this->authenticatedRequest(self::HTTP_GET, $url, $accessToken);
    }

    /**
     * Call Authenticated Request
     *
     * @param string $httpMethod
     * @param string $url
     * @param string $accessToken
     * @param array $data
     * @return response
     */
    private function authenticatedRequest(string $httpMethod, string $url, string $accessToken, array $data = []) {
        $request = $this->provider->getAuthenticatedRequest(
            $httpMethod,
            $url,
            $accessToken,
            $data
        );
        return $this->provider->getParsedResponse($request);
    }
}