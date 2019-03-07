<?php
/**
 * Created by PhpStorm.
 * User: alext
 * Date: 12/02/2019
 * Time: 23:48
 */

$fileName = $_POST['myFile'];

// It reads a json formatted text file and outputs it.
$string = file_get_contents($fileName);
echo $string;

//this breaks the code for some reason
//header('Location:http://unn-w16010695.newnumyspace.co.uk/Project/googleChartsTestingPhp.php');
?>