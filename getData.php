<?php

if(! empty($_REQUEST['filename']))
{
    $filename = $_REQUEST['filename'];
    //echo $filename;
    $filename = trim($filename,"'");
    $string = file_get_contents($filename);
    echo $string;

}
else{

    $string = file_get_contents('JsonFile2.json');
    echo $string;

}

?>