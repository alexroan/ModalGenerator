<?php
session_start();
require './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

?>


<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    </head>
    <body>
        <script>
            // $(document).ready(function(){
            //     let baseUrl="http://<?= $_SERVER['HTTP_HOST']; ?>/api/generate.php?";
            //     $('#productForm').submit(function (event) {
            //         event.preventDefault();
            //         var values = $(this).serialize();
            //         console.log(values);
            //         let url = baseUrl + values;
            //         $.ajax({
            //             type: 'GET',
            //             url: url,
            //             async: true,
            //             complete: function(data) {
            //                 console.log(data.responseText);
            //             }
            //         });
            //     });
            // });
        </script>

        <form id="productForm" action="redirectToMailchimp.php" method="post">
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
            <input type="submit" value="Create my popup" />
        </form>

    </body>
</html>