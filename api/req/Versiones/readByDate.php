<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);

if ($common->validateInput($data, "Date")) {

    $common->inputMappingObj($data, $Versiones);

    $VersionesResult = $Versiones->getByDate();

    if ($common->validateStatus($VersionesResult)) {

    $common->response200($VersionesResult);
    } else {
        $common->response404("No data found.");
    }
} else {

    $common->response404("Datos incompletos.");
}
