<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Historial.php';

$Historial = new Historial($db);

if ($common->validateInput($data, "datosModelos")) {

    $common->inputMappingObj($data, $Historial);

    $HistorialResult = $Historial->getByDatosModelos();

    if ($common->validateStatus($HistorialResult)) {

    $common->response200($HistorialResult);
    } else {
        $common->response404("No data found.");
    }
} else {

    $common->response404("Datos incompletos.");
}
