<?php

require __DIR__.'./../vendor/autoload.php';

class Database {

    private $connection;

    public function __construct(DatabaseConnection $connection = null) {
        $this->connection = $connection;
    }

    public function insert(string $table, array $columns, array $values) {
        $columns = implode(', ', $columns);
        $values = "'" . implode("', '", $values) . "'";
        $sql = "insert into $table ($columns) values ($values)";
        $this->connection->insert($sql);
    }

}

// $db = new Database();
// $db->insert("table", ['1','gfds','5555'], ['1','gfds','5555']);