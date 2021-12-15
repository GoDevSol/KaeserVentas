<?php
include_once __DIR__ . '/../../common/headerGET.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Historial.php';

$Historial = new Historial($db);

$HistorialResult = $Historial->getAll();


if ($common->validateStatus($HistorialResult)) {

    $common->response200($HistorialResult);
} else {
    $common->response404("No data found.");
}