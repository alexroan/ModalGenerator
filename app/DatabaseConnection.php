<?php

require __DIR__.'./../vendor/autoload.php';

class DatabaseConnection {

    private $connection;

    public function __construct($credentials) {
        $this->connection = new mysqli($credentials['host'], $credentials['user'], 
            $credentials['pass'], $credentials['name'], $credentials['port']);
        if ($this->connection->connect_error) {
            throw new Exception("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function __destruct()
    {
        $this->connection->close();
    }

    public function query($sql) {
        if ($this->connection->query($sql) === TRUE) {
            return $this->connection->insert_id;
        }
        throw new Exception($this->connection->error);
        
    }

}