<?php

require_once './bootstrap.php';

$api = $_SESSION['userData']['api_endpoint'] . '/3.0';

$request = $provider->getAuthenticatedRequest(
    'GET',
    $api . '/lists',
    $_SESSION['accessToken']
);
$response = $provider->getParsedResponse($request);

?>

<form id="productForm">
    <input type="email" name="email" placeholder="Your Email" />
    <input type="text" name="colour" placeholder="Colour" />
    <select name="productName" for="productForm" >
        <option value="KEY RING">Key ring</option>
        <option value="COASTER">Coaster</option>
    </select>
    <select name="productImage" for="productForm" >
        <option value="images/keyring1.jpg">ring 1</option>
        <option value="images/keyring2.jpg">ring 2</option>
    </select>
    <select name="listId" for="productForm">
        <?php foreach ($response['lists'] as $list) : ?>
            <option value="<?= $list['id'] ?>"><?= $list['name'] ?></option>
        <?php endforeach; ?>
    </select>
    <input type="submit" value="Create my popup" />
</form>

