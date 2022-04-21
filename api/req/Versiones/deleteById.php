<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);

if ($common->validateInput($data, "{stringInsert}")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Versiones);

    $VersionesResult = $Versiones-> deleteById();
    

    if ($common->validateStatus($VersionesResult)) {

        $db->commit();

        $common->response200($VersionesResult);
    } else {

        $db->rollBack();

        $common->response503("Unable to delete.");
    }
} else {

    $common->response404("Data is incomplete.");
}


<?php
include_once __DIR__ . '/../../common/headerGET.php';
include_once __DIR__ . '/../../common/includeCommon.php';



$Versiones = new Versiones($db);

$VersionesResult = $Versiones->getAll();


if ($common->validateStatus($VersionesResult)) {

    $common->response200($VersionesResult);
} else {
    $common->response404("No data found.");
}


