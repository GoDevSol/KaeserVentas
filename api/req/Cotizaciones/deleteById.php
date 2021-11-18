<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

$Cotizaciones = new Cotizaciones($db);

if ($common->validateInput($data, "{stringInsert}")) {

    $db->beginTransaction();

    $common->inputMappingObj($data, $Cotizaciones);

    $CotizacionesResult = $Cotizaciones-> deleteById();
    

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


<?php
include_once __DIR__ . '/../../common/headerGET.php';
include_once __DIR__ . '/../../common/includeCommon.php';



$Cotizaciones = new Cotizaciones($db);

$CotizacionesResult = $Cotizaciones->getAll();


if ($common->validateStatus($CotizacionesResult)) {

    $common->response200($CotizacionesResult);
} else {
    $common->response404("No data found.");
}


