<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';
include_once __DIR__ . '/../../common/validateToken.php';
include_once __DIR__ . '/../../objects/user.php';

$validate = validateToken($data->jwt, $key);
$user = new User($db);

if (!empty($data->password)  && !empty($data->passwordConfirm) && $common->validateStatus($validate)) {
    if ($validate["data"]->rol == 3) {
        $user->id = $validate["data"]->id;

        $common->inputMappingObj($data->user, $user);



        if ($data->password == $data->passwordConfirm) {
            $user->password = password_hash($data->password, PASSWORD_BCRYPT);
            $user->updatePassword();
            $respuesta = [];
            $respuesta["status"] = true;
            $respuesta["message"] = "Modificado exitosamente.";

            $common->response200($respuesta);
        } else {
            $common->response404("FATAL ERROR");
        }
    } else {

        $common->response404("No authorized");
    }
} else {

    $common->response404("Data is incomplete.");
}
