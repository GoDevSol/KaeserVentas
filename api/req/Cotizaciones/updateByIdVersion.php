<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';
include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);
$Cotizaciones = new Cotizaciones($db);



if ($common->validateInput($data, "datosForm,datosModelos")) {

    $db->beginTransaction();

    $Cotizaciones->id = $data->id;

    $Cotizaciones->loadById();

    $Versiones->idCotizacion = $Cotizaciones->id;
    $Versiones->datosForm = str_replace('&quot;', '"', $Cotizaciones->datosForm);
    $Versiones->datosModelos = str_replace('&quot;', '"', $Cotizaciones->datosModelos);
    $Versiones->direccionArchivo = $Cotizaciones->direccionArchivo;
    $Versiones->estado = $Cotizaciones->estado;
    $Versiones->estadoC4C = $Cotizaciones->estadoC4C;

    $VersionesResult = $Versiones->createVersiones();

    $common->inputMappingObj($data, $Cotizaciones);

    $CotizacionesResult = $Cotizaciones->updateById();

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
