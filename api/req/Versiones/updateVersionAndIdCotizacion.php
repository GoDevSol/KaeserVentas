<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';
include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);
$Cotizaciones = new Cotizaciones($db);

if ($common->validateInput($data, "idCotizacion,id")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Versiones);

    $Cotizaciones->id = $data->idCotizacion;

    $Cotizaciones->loadById();

    $Versiones->loadById();

    $datosForm = str_replace('&quot;', '"', $Cotizaciones->datosForm);
    $datosModelos = str_replace('&quot;', '"', $Cotizaciones->datosModelos);

    $Cotizaciones->datosForm = str_replace('&quot;', '"', $Versiones->datosForm);
    $Cotizaciones->datosModelos = str_replace('&quot;', '"', $Versiones->datosModelos);

    $Versiones->datosForm =  $datosForm;
    $Versiones->datosModelos =  $datosModelos;

    $VersionesResult = $Versiones->updateById();

    $VersionesResult = $Cotizaciones->updateByIdAllDatosForm();



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
