<?php

require __DIR__.'./../vendor/autoload.php';

class DatabaseConnection {

    private $connection;

    public function __construct(string $host, string $database, string $username, string $password, string $port) {
        $this->connection = new mysqli($host, $username, $password, $database, $port);
        if ($this->connection->connect_error) {
            throw new Exception("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function __destruct()
    {
        $this->connection->close();
    }

    public function insert($sql) {
        if ($this->connection->query($sql) === TRUE) {
            return $this->connection->insert_id;
        }
        return false;
    }

}