<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

$Cotizaciones = new Cotizaciones($db);

if ($common->validateInput($data, "direccionArchivo")) {

    $common->inputMappingObj($data, $Cotizaciones);

    $CotizacionesResult = $Cotizaciones->getByDireccionArchivo();

    if ($common->validateStatus($CotizacionesResult)) {

    $common->response200($CotizacionesResult);
    } else {
        $common->response404("No data found.");
    }
} else {

    $common->response404("Datos incompletos.");
}
