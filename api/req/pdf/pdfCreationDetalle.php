<?php
require(__DIR__ . '/../../libs/pdf/fpdf.php');
include_once __DIR__ . '/../../common/headerPOST.php';
include_once __DIR__ . '/../../common/includeCommon.php';
include_once __DIR__ . '/../../objects/user.php';

include_once __DIR__ . '/../../objects/Historial.php';

$Cotizaciones = new Historial($db);

class PDF extends FPDF
{
    function Header()
    {
        global $title;

        // Arial bold 15
        $this->SetFont('Arial', '', 15);
        // Calculamos ancho y posición del título.
        $w = $this->GetStringWidth($title) + 6;
        $this->SetX(10);

        $this->SetDrawColor(76, 113, 118);
        $this->SetFillColor(76, 113, 118);
        $this->SetTextColor(255, 255, 255);
        // Ancho del borde (1 mm)
        $this->SetLineWidth(1);
        // Título
        $this->Cell(190, 9, $title, 1, 1, 'C', true);
        // Salto de línea
        $this->Ln(5);
    }

    function Footer()
    {
        $this->SetY(-15);
        $this->SetFont('Arial', '', 8);
        $this->SetTextColor(128);
        $this->Cell(0, 10, utf8_decode('Página ') . $this->PageNo(), 0, 0, 'C');
    }


    function ChapterTitle($label)
    {

        $this->SetFont('Arial', '', 12);

        $this->SetFillColor(230, 231, 231);

        $this->Cell(0, 10, utf8_decode($label), 0, 1, 'C', true);
    }

    function ChapterBody($file)
    {
        // Leemos el fichero
        $txt = file_get_contents($file);
        // Times 12
        $this->SetFont('Times', '', 12);
        // Imprimimos el texto justificado
        $this->MultiCell(0, 5, $txt);
        // Salto de línea
        $this->Ln();
        // Cita en itálica
        $this->SetFont('', 'I');
        $this->Cell(0, 5, '(fin del extracto)');
    }

    function PrintChapter($num, $title, $file)
    {
        $this->AddPage();
        $this->ChapterTitle($num, $title);
        $this->ChapterBody($file);
    }



    function CellFit($w, $h = 0, $txt = '', $border = 0, $ln = 0, $align = '', $fill = false, $link = '', $scale = false, $force = true)
    {
        //Get string width
        $str_width = $this->GetStringWidth($txt);

        //Calculate ratio to fit cell
        if ($w == 0)
            $w = $this->w - $this->rMargin - $this->x;
        $ratio = ($w - $this->cMargin * 2) / $str_width;

        $fit = ($ratio < 1 || ($ratio > 1 && $force));
        if ($fit) {
            if ($scale) {
                //Calculate horizontal scaling
                $horiz_scale = $ratio * 100.0;
                //Set horizontal scaling
                $this->_out(sprintf('BT %.2F Tz ET', $horiz_scale));
            } else {
                //Calculate character spacing in points
                $char_space = ($w - $this->cMargin * 2 - $str_width) / max(strlen($txt) - 1, 1) * $this->k;
                //Set character spacing
                $this->_out(sprintf('BT %.2F Tc ET', $char_space));
            }
            //Override user alignment (since text will fill up cell)
            $align = '';
        }

        //Pass on to Cell method
        $this->Cell($w, $h, $txt, $border, $ln, $align, $fill, $link);

        //Reset character spacing/horizontal scaling
        if ($fit)
            $this->_out('BT ' . ($scale ? '100 Tz' : '0 Tc') . ' ET');
    }

    //Cell with horizontal scaling only if necessary
    function CellFitScale($w, $h = 0, $txt = '', $border = 0, $ln = 0, $align = '', $fill = false, $link = '')
    {
        $this->CellFit($w, $h, $txt, $border, $ln, $align, $fill, $link, true, false);
    }

    //Cell with horizontal scaling always
    function CellFitScaleForce($w, $h = 0, $txt = '', $border = 0, $ln = 0, $align = '', $fill = false, $link = '')
    {
        $this->CellFit($w, $h, $txt, $border, $ln, $align, $fill, $link, true, true);
    }

    //Cell with character spacing only if necessary
    function CellFitSpace($w, $h = 0, $txt = '', $border = 0, $ln = 0, $align = '', $fill = false, $link = '')
    {
        $this->CellFit($w, $h, $txt, $border, $ln, $align, $fill, $link, false, false);
    }

    //Cell with character spacing always
    function CellFitSpaceForce($w, $h = 0, $txt = '', $border = 0, $ln = 0, $align = '', $fill = false, $link = '')
    {
        //Same as calling CellFit directly
        $this->CellFit($w, $h, $txt, $border, $ln, $align, $fill, $link, false, true);
    }


    function FancyTable($header, $data)
    {
        // Colores, ancho de línea y fuente en negrita
        $this->SetFillColor(76, 113, 118);
        $this->SetTextColor(255);
        $this->SetDrawColor(76, 113, 118);
        $this->SetLineWidth(.3);
        $this->SetFont('', 'B', 14);
        // Cabecera
        $w = array(10, 35, 25, 20, 100);
        for ($i = 0; $i < count($header); $i++)
            $this->CellFitSpace($w[$i], 7, $header[$i], 1, 0, 'C', true);
        $this->Ln();
        $this->SetFont('', 'B', 10);
        // Restauración de colores y fuentes
        $this->SetFillColor(224, 235, 255);
        $this->SetTextColor(0);
        $this->SetFont('');
        // Datos
        $fill = false;
        foreach ($data as $row) {
            //echo strlen($row[1]);

            $height = (intdiv(strlen($row[3]), 85) + 1) * 9;


            $this->CellFitSpace($w[0], $height, $row[0], '1', 0, 'C', $fill);
            $this->CellFitSpace($w[1], $height, $row[1], '1', 0, 'C', $fill);
            $this->CellFitSpace($w[2], $height, ($row[2]), '1', 0, 'C', $fill);
            $this->CellFitSpace($w[3], $height, ($row[3]), '1', 0, 'C', $fill);
            $this->MultiCell($w[4], 9, ($row[4]), '1', 'C', $fill);
            $fill = !$fill;
        }
        // Línea de cierre
        $this->Cell(array_sum($w), 0, '', 'T');
    }

    function LoadData($dataArray, $common, $Cotizaciones, $pdf, $header, $db)
    {



        foreach ($dataArray as $ite) {



            $user = new User($db);



            $user->id = $ite->idUser;

            $userResult = $user->getById();




            $data = array();
            $contador = 1;

            $stringDescripcion = " ";
            if (empty($ite->datosForm->oportunidad)) {
                $ite->datosForm->oportunidad = " ";
            }
            if (empty($ite->datosForm->oferta)) {
                $ite->datosForm->oferta = " ";
            }
            if (empty($ite->datosForm->idCliente)) {
                $ite->datosForm->idCliente = " ";
            }

            if (empty($ite->datosForm->nombreCliente)) {
                $ite->datosForm->nombreCliente = " ";
            }

            $stringDescripcion = $ite->datosForm->oportunidad . " - " . $ite->datosForm->oferta . " - " . $ite->datosForm->idCliente . " - " . $ite->datosForm->nombreCliente;

            $common->inputMappingObj($ite, $Cotizaciones);

            $Cotizaciones->idCotizacion = $ite->id;

            $CotizacionesResult = $Cotizaciones->getByIdCotizacion();

            foreach ($CotizacionesResult['data'] as $estado) {
                $item = [];
                $item[] = $contador;
                $item[] = $estado['Date'];

                $item[] =  getEstado($estado['estado']);
                $item[] = $estado['estadoC4C'] == 1 ? 'SI' : 'NO';
                $item[] = $userResult["data"][0]['nombres'];

                $data[] = $item;
                $contador++;
            }
            $pdf->ChapterTitle($stringDescripcion);
            $pdf->FancyTable($header, $data);
            $pdf->Ln(1);
        }
    }
}

function getEstado($estado)
{

    switch ($estado) {
        case '1':
            $estado = "POST VENTA";
            break;
        case '2':
            $estado = "PENDIENTE";
            break;
        case '3':
            $estado = "EJECUTADA";
            break;
        case '0':
            $estado = "TODOS";
            break;
        case '-1':
            $estado = "TODOS";
            break;

        case strlen($estado) > 11:
            $estado = substr($estado, 0, -14);;
            break;

        default:
            break;
    }
    return $estado;
}

$pdf = new PDF();
$title = 'Kaeser Compresores';
$pdf->SetTitle($title);
$pdf->AddPage();
$pdf->ChapterTitle("REPORTE DE ESTADOS POR COTIZACION");
$pdf->Ln(1);

$pdf->SetFillColor(255, 255, 255);

$pdf->Text(20, 42, 'Fecha de Creacion:');
$pdf->Text(20, 48, utf8_decode('Hora de Creacion:'));

$pdf->Text(60, 42, date("d-m-Y"));
date_default_timezone_set("America/Guatemala");
$pdf->Text(60, 48, date("h:i:s a"));



$pdf->Text(120, 42, 'Filtro Fecha:');
$pdf->Text(120, 48, 'Filtro Estado:');

$pdf->Text(160, 42, getEstado($data->fecha));
$pdf->Text(160, 48, getEstado($data->estado));



$pdf->Ln();
$pdf->Ln();
$header = array('#', 'Fecha', 'Estado', 'E. C4C', utf8_decode('Nombre Usuario'));

$dataArray = $pdf->LoadData($data->modelos, $common, $Cotizaciones, $pdf, $header, $db);

$return = $pdf->Output('name.pdf', 'S');
$return = base64_encode($return);
$return = 'data:application/pdf;base64,' . $return;

echo $return;
