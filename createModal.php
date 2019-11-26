<?php

require_once './bootstrap.php';

$baseUrl = $_SESSION['userData']['api_endpoint'];
$accessToken = $_SESSION['accessToken'];
$response = $mailchimp->getLists($baseUrl, $accessToken);

?>

<form id="productForm">
    <input type="email" name="email" value="<?= $_COOKIE['email'] ?>" />
    <input type="text" name="colour" value="<?= $_COOKIE['colour'] ?>" />
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

