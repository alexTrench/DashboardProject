<?php
/**
 * Created by PhpStorm.
 * User: alext
* Date: 09/02/2019
* Time: 00:41
*/

$fileName = $_POST['myFile'];

// It reads a json formatted text file and outputs it.
if($fileName != null) {
    $string = file_get_contents($fileName);
    echo $string;
}else{
    $string =  file_get_contents("JsonFile2.json");
    echo $string;
}


header('Location: http://unn-w16010695.newnumyspace.co.uk/Project/googleChartsTestingPhp.php');
?>