<?php

require __DIR__.'./../vendor/autoload.php';

class Database {

    private $connection;

    public function __construct(DatabaseConnection $connection = null) {
        $this->connection = $connection;
    }

    public function insertPartner(string $email, string $accessToken) {
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $accessToken = filter_var($accessToken, FILTER_SANITIZE_STRING);

        $sql = "insert into partner (email, access_token) 
            values ('$email', '$accessToken')";
        
        $id = $this->connection->query($sql);
        return $id;
    }

    public function updateListId(int $id, string $email, string $accessToken, string $listId) {
        $id = filter_var($id, FILTER_SANITIZE_NUMBER_INT);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $accessToken = filter_var($accessToken, FILTER_SANITIZE_STRING);
        $listId = filter_var($listId, FILTER_SANITIZE_STRING);

        $sql = "update partner set list_id = '$listId' where 
            id = $id and email = '$email' and access_token = '$accessToken'";

        $id = $this->connection->query($sql);
        return $id;
    }

}

// $db = new Database();
// $db->insert("table", ['1','gfds','5555'], ['1','gfds','5555']);