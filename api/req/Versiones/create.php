<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);

if ($common->validateInput($data, "idCotizacion,datosForm,datosModelos,direccionArchivo,estado,estadoC4C,Date")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Versiones);

    $VersionesResult = $Versiones-> createVersiones();

    if ($common->validateStatus($VersionesResult)) {

        $db->commit();

        $common->response200($VersionesResult);
    } else {

        $db->rollBack();

        $common->response503("Unable to create.");
    }
} else {

    $common->response404("Data is incomplete.");
}