<?php
require __DIR__ . '/commonVariables.php';

require __DIR__ . '/../libs/mail/src/Exception.php';

require __DIR__ . '/../libs/mail/src/PHPMailer.php';

require __DIR__ . '/../libs/mail/src/SMTP.php';
require_once(__DIR__ . '/../libs/dompdf/autoload.inc.php');

use PHPMailer\PHPMailer\PHPMailer;

use Dompdf\Dompdf;

use PHPMailer\PHPMailer\Exception;

$email_reply_address;

function sendMailFunction($htmlFile, $ModifiedArray, $sendTo, $subject, $atachment = "")
{
    if (str_contains($htmlFile, '.html')) {
        $body = file_get_contents($htmlFile);
    } else {
        $body = $htmlFile;
    }

    global $smtp_var_username;
    global $smtp_var_host;
    global $smtp_var_password;
    global $email_from_address;
    global $email_from_alias;
    global $email_reply_address;

    foreach ($ModifiedArray as $clave => $valor) {

        $body = str_replace("{{" . $clave . "}}", $valor, $body);
    }

    $mail = new PHPMailer(true);


    $mail->FromName = "kaeserventas@godevsol.tech";

    $mail->addAddress($sendTo, "Recipient Name");

    $mail->isHTML(true);

    $mail->Subject = $subject;


    $mail->setFrom($email_from_address, $email_from_alias);

    $mail->addReplyTo($email_reply_address, $email_from_alias);


    explodeString($mail, $sendTo, 1);
    explodeString($mail, $atachment, 2);

    if (!($atachment == "")) {
        $dompdf = new Dompdf();
        $dompdf->loadHtml($body);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        $output = $dompdf->output();
        file_put_contents($atachment . '.pdf', $output);
        $mail->AddAttachment($atachment . '.pdf', '', $encoding = 'base64', $type = 'application/pdf');
    }


    $mail->isHTML(true);

    $mail->Subject = $subject;

    $mail->Body = $body;


    $mail->AltBody = "Actualice su explorador, y comuniquese a servicio al cliente indicando el problema. Error: 305ET";

    try {

        $mail->send();
        unlink($atachment . '.pdf');

        return array("status" => true, "message" => "Email send successfully.");
    } catch (Exception $e) {
        var_dump($e);
        return array("status" => false, "message" => "Email not send. Error: " . $e->getMessage());
    }
}

function explodeString($mail, $string, $type)
{
    $list = explode(",", $string);

    foreach ($list as $clave) {

        try {
            if ($type == 1) {
                $mail->addAddress($clave, "Recipient Name");
            } else if ($type == 2) {
                $mail->addAttachment($clave);
            }
        } catch (Exception $e) {
        }
    }
}
