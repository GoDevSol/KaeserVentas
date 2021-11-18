<?php
include_once __DIR__ . '/../../common/headerGET.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

$Cotizaciones = new Cotizaciones($db);

$CotizacionesResult = $Cotizaciones->getAll();


if ($common->validateStatus($CotizacionesResult)) {

    $common->response200($CotizacionesResult);
} else {
    $common->response404("No data found.");
}