<?php

include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';
include_once __DIR__ . '/../../common/mail.php';

if (
    $common->validateInput($data, "id")
) {
    $word = [];
    $word["tablaDatos"] = "";
    foreach ($data->datosForm as $key => $value) {
        try {
            $rowTabla = '';
            switch ($key) {

                case 'oportunidad':
                    $rowTabla =  '<tr><td> <strong> No. de oportunidad:';
                    break;

                case 'oferta':
                    $rowTabla =  '<tr><td> <strong> No. de oportunidad:';
                    break;

                case 'idCliente':
                    $rowTabla =  '<tr><td> <strong> No. de oportunidad:';
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
            $rowTabla = $rowTabla . '</strong></td><td style="padding-left: 10px;">' . $value . '</td></tr>';
            $word["tablaDatos"] = $word["tablaDatos"] . $rowTabla;
        } catch (\Throwable $th) {
        }
    }




    try {
        $responseEmail = sendMailFunction(__DIR__ . "../htmlTemplate/index.html", $word, "jf.orozco3@gmail.com", "Kaeser - Aplicacion Ventas");
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
