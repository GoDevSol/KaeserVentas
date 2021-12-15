<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';
include_once __DIR__ . '/../../objects/Historial.php';

$Historial = new Historial($db);
$Cotizaciones = new Cotizaciones($db);
$Historial->estado = 1;

if ($common->validateInput($data, "datosForm,datosModelos")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Cotizaciones);

    $CotizacionesResult = $Cotizaciones->createCotizaciones();

    if ($common->validateStatus($CotizacionesResult)) {

        $common->inputMappingObj($data, $Historial);

        $Historial->idCotizacion = $CotizacionesResult["id"];

        $HistorialResult = $Historial->createHistorial();

        $db->commit();

        $common->response200($CotizacionesResult);
    } else {

        $db->rollBack();

        $common->response503("Unable to create.");
    }
} else {

    $common->response404("Data is incomplete.");
}
