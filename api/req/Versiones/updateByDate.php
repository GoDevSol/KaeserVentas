<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);

if ($common->validateInput($data, "Campos a cambiar")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Versiones);

    $VersionesResult = $Versiones->updateByDate();
    

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