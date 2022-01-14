<?php
include_once __DIR__ . '/../../common/headerGET.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

include_once __DIR__ . '/../../common/validateToken.php';

include_once __DIR__ . '/../../objects/user.php';


$Cotizaciones = new Cotizaciones($db);
$validate = validateToken($data->jwt, $key);

if ($validate["data"]->rol == 1) {
    $Cotizaciones->rol = $validate["data"]->rol;
    $Cotizaciones->idUser = $validate["data"]->id;
    $CotizacionesResult = $Cotizaciones->getByEstadoAndUser();
} else {
    $CotizacionesResult = $Cotizaciones->getAll();
}



if ($common->validateStatus($CotizacionesResult)) {

    $common->response200($CotizacionesResult);
} else {
    $common->response404("No data found.");
}
