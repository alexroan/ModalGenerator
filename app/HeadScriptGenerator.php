<?php

require '../vendor/autoload.php';

class HeadScriptGenerator {

    public function generateHeadScript(string $clientEmail, string $productName, string $productImage) {
        $generatedFile = file_get_contents('../generated/generatedHeadScript.js');

        $generatedFile = "const PRODUCT = '$productName';" . $generatedFile;
        $generatedFile = "const IMAGE = '$productImage';" . $generatedFile;

        return $this->deployHeadScript($clientEmail, $generatedFile);
    }

    private function deployHeadScript(string $filename, string $content) {
        try{
            $minifiedContent = JShrink\Minifier::minify($content);
            $newFilePath = "../generated/" . $filename . ".js";
            file_put_contents($newFilePath, $minifiedContent);
            return $newFilePath;
        }
        catch(Exception $e){
            return false;
        }
    }
}

// $generator = new HeadScriptGenerator();
// echo $generator-> generateHeadScript('alex.roan@hotmail.com', "KEY RING", "images/keyring2.jpg");