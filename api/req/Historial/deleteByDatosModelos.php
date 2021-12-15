<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Historial.php';

$Historial = new Historial($db);

if ($common->validateInput($data, "{stringInsert}")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Historial);

    $HistorialResult = $Historial-> deleteByDatosModelos();
    

    if ($common->validateStatus($HistorialResult)) {

        $db->commit();

        $common->response200($HistorialResult);
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



$Historial = new Historial($db);

$HistorialResult = $Historial->getAll();


if ($common->validateStatus($HistorialResult)) {

    $common->response200($HistorialResult);
} else {
    $common->response404("No data found.");
}


