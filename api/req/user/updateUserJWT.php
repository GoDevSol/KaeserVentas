<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';
include_once __DIR__ . '/../../common/validateToken.php';
include_once __DIR__ . '/../../objects/user.php';

$validate = validateToken($data->jwt, $key);
$user = new User($db);

if ($common->validateStatus($validate)) {
    var_dump($validate["data"]->rol);
    if ($validate["data"]->id == 3) {

        if ($common->validateInput($data, "nombres,correo,puesto,pais")) {

            $db->beginTransaction();

            $common->inputMappingObj($data, $user);
            $userResult = $user->updateUser();
            $userResult["data"] = $common->responseToObject("nombres,correo,puesto,pais,user", $user);

            if ($common->validateStatus($userResult)) {

                $db->commit();

                $common->response200($userResult);
            } else {

                $db->rollBack();

                $common->response503("Unable to update.");
            }
        } else {

            $common->response404("Data is incomplete.");
        }
    } else {

        $common->response404("No authorized");
    }
} else {

    $common->response404($common->abstractMessage($validate));
}
