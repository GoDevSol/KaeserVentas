<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Cotizaciones.php';

include_once __DIR__ . '/../../common/validateToken.php';

include_once __DIR__ . '/../../objects/user.php';


$validate = validateToken($data->jwt, $key);

$Cotizaciones = new Cotizaciones($db);

$user = new User($db);

if ($common->validateStatus($validate)) {

    if ($common->validateInput($data, "estado")) {

        $common->inputMappingObj($data, $Cotizaciones);
        $Cotizaciones->rol = $validate["data"]->rol;
        $Cotizaciones->idUser = $validate["data"]->id;

        if ($validate["data"]->rol == 1) {
            $CotizacionesResult = $Cotizaciones->getByEstadoAndUser();
        } else {
            $CotizacionesResult = $Cotizaciones->getByEstado();
        }



        if ($common->validateStatus($CotizacionesResult)) {

            $common->response200($CotizacionesResult);
        } else {
            $common->response404("No data found.");
        }
    } else {

        $common->response404("Datos incompletos.");
    }
} else {

    $common->response404("JWT Invalido");
}
