<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';
include_once __DIR__ . '/../../objects/Historial.php';

$Historial = new Historial($db);
$Cotizaciones = new Cotizaciones($db);

if ($common->validateInput($data, "datosForm,datosModelos")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Cotizaciones);

    $common->inputMappingObj($data, $Historial);

    $Historial->idCotizacion = $Cotizaciones->id;


    $CotizacionesResult = $Cotizaciones->updateById();


    $HistorialResult = $Historial->createHistorial();


    if ($common->validateStatus($CotizacionesResult)) {

        $db->commit();

        $common->response200($CotizacionesResult);
    } else {

        $db->rollBack();

        $common->response503("Unable to delete.");
    }
} else {

    $common->response404("Data is incomplete.");
}
