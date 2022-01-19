<?php

include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';
include_once __DIR__ . '/../../common/mail.php';

if (
    $common->validateInput($data, "user")
) {
    $fileName = $data->user->nombres;
    $word = [];
    $word["nombreTrabajador"] = $data->user->nombres;
    $word["tablaDatos"] = "";
    $word["titulo"] = $data->titulo;
    $word["tablaModelos"] = "";

    foreach ($data->datosForm as $key => $value) {
        try {
            $rowTabla = '';
            switch ($key) {

                case 'oportunidad':
                    $rowTabla =  '<tr><td> <strong> No. de Oportunidad:';
                    $fileName = $fileName . $value;
                    break;

                case 'oferta':
                    $rowTabla =  '<tr><td> <strong> No. de Oferta:';
                    break;

                case 'idCliente':
                    $rowTabla =  '<tr><td> <strong> Codigo del Cliente:';
                    break;

                case 'nombreCliente':
                    $rowTabla =  '<tr><td> <strong> Nombre del Cliente:';
                    break;

                case 'direccion':
                    $rowTabla =  '<tr><td> <strong> Direccion Cliente:';
                    break;

                case 'contacto':
                    $rowTabla =  '<tr><td> <strong> Numero de Contacto:';
                    break;

                case 'condicionPago':
                    $rowTabla =  '<tr><td> <strong> Condicion de Pago:';
                    break;

                case 'moneda':
                    $rowTabla =  '<tr><td> <strong> Moneda:';
                    break;

                case 'porcentajeDescuento':
                    $rowTabla =  '<tr><td> <strong> Porcentaje de Descuento:';
                    break;

                case 'correoCliente':
                    $rowTabla =  '<tr><td> <strong> Correo del Cliente:';
                    break;

                case 'observacion':
                    $rowTabla =  '<tr><td> <strong> Observacion:';
                    break;

                default:
                    # code...
                    break;
            }
            $rowTabla = $rowTabla . '</strong></td><td style="padding-left: 10px; font-weight: 100;"><p style="text-align:left;font-size:13px;font-weight:normal;line-height:20px;color: black;" >' . $value . '</p></td></tr>';
            $word["tablaDatos"] = $word["tablaDatos"] . $rowTabla;
        } catch (\Throwable $th) {
        }
    }
    $contador = 1;
    foreach ($data->modelos as $key => $value) {
        try {

            $word["tablaModelos"] = $word["tablaModelos"]
                . '<tr><td style="font-size:13px;font-weight:normal;color: black;border-left: 1px solid #4C7176;border-bottom: 1px dashed #4C7176;">' . $contador . '</td><td style="font-size:13px;font-weight:normal;color: black;border-left: 1px solid #4C7176;border-bottom: 1px dashed #4C7176;padding-left: 10px;"> ' . $value->modelo . '</td><td style="border-left: 1px solid #4C7176;border-bottom: 1px dashed #4C7176;padding-left: 10px;font-size:13px;font-weight:normal;color: black; ">' . $value->cantidad . '</td></tr>';;
        } catch (\Throwable $th) {
        }
        $contador++;
    }




    try {
        $responseEmail = sendMailFunction("./htmlTemplate/index.html", $word, $data->user->correo, "Kaeser - Aplicacion Ventas", $fileName);
    } catch (\Throwable $th) {
        var_dump($th);
    }


    if ($common->validateStatus($responseEmail)) {

        $common->response200($common->abstractMessage($responseEmail));
    } else {
        $common->response503("No se pudo mandar el correo.");
    }
} else {
    $common->response404("Datos incompletos.");
}
