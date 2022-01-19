<?php

require_once(__DIR__ . '/../../libs/dompdf/autoload.inc.php');

use Dompdf\Dompdf;


$dompdf = new Dompdf();
$html = file_get_contents("./htmlTemplate/index.html");
$dompdf->loadHtml($html);


$dompdf->setPaper('A4', 'portrait');


$dompdf->render();

$output = $dompdf->output();
file_put_contents('Brochure.pdf', $output);
