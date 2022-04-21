<?php
include_once __DIR__ . '/../../common/headerGET.php';
include_once __DIR__ . '/../../common/includeCommon.php';

include_once __DIR__ . '/../../objects/Versiones.php';

$Versiones = new Versiones($db);

$VersionesResult = $Versiones->getAll();


if ($common->validateStatus($VersionesResult)) {

    $common->response200($VersionesResult);
} else {
    $common->response404("No data found.");
}