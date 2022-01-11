<?php
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';
include_once __DIR__ . '/../../common/validateToken.php';
include_once __DIR__ . '/../../objects/user.php';

$validate = validateToken($data->jwt, $key);
$user = new User($db);

if (!empty($data->password)  && !empty($data->passwordConfirm) && !empty($data->passwordOld) && $common->validateStatus($validate)) {

    $user->id = $validate["data"]->id;
    $user->loadId();

    if (password_verify($data->passwordOld, $user->password)) {

        if ($data->password == $data->passwordConfirm) {
            $user->password = password_hash($data->password, PASSWORD_BCRYPT);
            $user->updatePassword();
            $respuesta = [];
            $respuesta["status"] = true;
            $respuesta["message"] = "Las contraseñas no coinciden.";

            $common->response200($respuesta);
        } else {
            $common->response404("FATAL ERROR");
        }
    } else {
        $common->response404("Las contraseñas no coinciden.");
    }
} else {

    $common->response404("Data is incomplete.");
}
