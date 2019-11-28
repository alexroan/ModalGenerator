<?php

require __DIR__.'./../vendor/autoload.php';

use Symfony\Component\Yaml\Yaml;

class YamlReader {

    public function readFile(string $configFile, string $environment) {
        $value = Yaml::parseFile($configFile);
        $value = $value['environments'][$environment];
        return $value;
    }

}

// $reader = new YamlReader();
// print_r(json_encode($reader->readFile(__DIR__.'/../phinx.yml', 'development')));
