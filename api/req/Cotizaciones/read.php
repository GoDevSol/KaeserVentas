<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

include_once __DIR__ . '/../../common/validateToken.php';

include_once __DIR__ . '/../../objects/user.php';


$Cotizaciones = new Cotizaciones($db);
$validate = validateToken($data->jwt, $key);

if ($common->validateStatus($validate)) {
    if ($validate["data"]->rol == 1) {
        $Cotizaciones->rol = $validate["data"]->rol;
        $Cotizaciones->idUser = $validate["data"]->id;
        $CotizacionesResult = $Cotizaciones->getByUser();
    } else {
        $CotizacionesResult = $Cotizaciones->getAll();
    }
    $common->response200($CotizacionesResult);
} else {
    $common->response404("JWT Invalido.");
}
