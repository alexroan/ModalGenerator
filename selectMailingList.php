<?php

require_once './bootstrap.php';

$response = $mailchimp->getLists($_SESSION['userData']['api_endpoint'], $_SESSION['accessToken']);
$email = $_SESSION['userData']['login']['email'];
$partnerId = $_SESSION['partnerId'];

?>

<html>

    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    </head>

    <body>

        <script>
            // $(document).ready(function(){
            //     let baseUrl="http://<?= $_SERVER['HTTP_HOST']; ?>/api/registerPartner.php?";
            //     $('#productForm').submit(function (event) {
            //         event.preventDefault();
            //         var values = $(this).serialize();
            //         console.log(values);
            //         let url = baseUrl;
            //         $.ajax({
            //             type: 'POST',
            //             data: values,
            //             url: url,
            //             async: true,
            //             complete: function(data) {
            //                 console.log(data.responseText);
            //             }
            //         });
            //     });
            // });
        </script>

        <form id="productForm" method="post" action="saveSubscriptionList.php">
            <input type="email" name="email" value="<?= $email ?>" />
            <input type="hidden" name="partnerId" value="<?= $partnerId ?>" />
            <select name="productName" for="productForm" >
                <option value="KEY RING">Key ring</option>
                <option value="COASTER">Coaster</option>
            </select>
            <select name="listId" for="productForm">
                <?php foreach ($response['lists'] as $list) : ?>
                    <option value="<?= $list['id'] ?>"><?= $list['name'] ?></option>
                <?php endforeach; ?>
            </select>
            <input type="submit" value="Create my popup" />
        </form>
    </body>

</html>



