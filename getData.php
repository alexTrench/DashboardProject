<?php
$filename = isset($array['q']) ? $array['q'] : '';
$filename = $_REQUEST['q'];
if($filename !== "")
{
    $string = file_get_contents("$filename");
    echo $string;
}
else{
    // It reads a json formatted text file and outputs it.
    $string = file_get_contents("sampleData.json");
    echo $string;
}


?>