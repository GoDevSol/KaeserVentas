<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

$Cotizaciones = new Cotizaciones($db);

if ($common->validateInput($data, "datosForm,datosModelos")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Cotizaciones);

    $CotizacionesResult = $Cotizaciones->createCotizaciones();

    if ($common->validateStatus($CotizacionesResult)) {

        $db->commit();

        $common->response200($CotizacionesResult);
    } else {

        $db->rollBack();

        $common->response503("Unable to create.");
    }
} else {

    $common->response404("Data is incomplete.");
}
