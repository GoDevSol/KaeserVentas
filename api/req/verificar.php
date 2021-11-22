<?php
include_once './../common/includeCommon.php';
include_once './../common/headerPOST.php';

$pathFile = "fileCotizaciones\\";

$id = $_POST['id'];

$fullPathFile = $pathFile . $id;

mkdir($fullPathFile, 0777);


$imagename = $_FILES['file']['name'];
//Stores the filetype e.g image/jpeg
$imagetype = $_FILES['file']['type'];
//Stores any error codes from the upload.
$imageerror = $_FILES['file']['error'];
//Stores the tempname as it is given by the host when uploaded.
$imagetemp = $_FILES['file']['tmp_name'];

//The path you wish to upload the image to


if (is_uploaded_file($imagetemp)) {
    if (move_uploaded_file($imagetemp, $fullPathFile . "\\" . $imagename)) {
        $common->response200(
            array("status" => true, "data" => $_FILES['file'])
        );
    } else {
        $common->response503("ERROR, NO FUE POSIBLE SUBIR EL ARCHIVO");
    }
} else {
    $common->response404("ERROR, NO FUE POSIBLE SUBIR EL ARCHIVO");
}
