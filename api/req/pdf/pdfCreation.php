<?php
require(__DIR__ . '/../../libs/pdf/fpdf.php');

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

        $this->SetDrawColor(255, 196, 9);
        $this->SetFillColor(255, 196, 9);
        $this->SetTextColor(0, 0, 0);
        // Ancho del borde (1 mm)
        $this->SetLineWidth(1);
        // Título
        $this->Cell(190, 9, $title, 1, 1, 'C', true);
        // Salto de línea
        $this->Ln(10);
    }

    function Footer()
    {
        $this->SetY(-15);
        $this->SetFont('Arial', '', 8);
        $this->SetTextColor(128);
        $this->Cell(0, 10, utf8_decode('Página ') . $this->PageNo(), 0, 0, 'C');
    }


    function ChapterTitle($num, $label)
    {
        // Arial 12
        $this->SetFont('Arial', '', 12);
        // Color de fondo
        $this->SetFillColor(200, 220, 255);
        // Título
        $this->Cell(0, 6, utf8_decode("Capítulo $num : $label"), 0, 1, 'L', true);
        // Salto de línea
        $this->Ln(4);
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
}



$pdf = new PDF();
$title = 'Kaeser Compresores';
$pdf->SetTitle($title);
$pdf->SetAuthor('Julio Verne');
$pdf->PrintChapter(1, 'UN RIZO DE HUIDA', '../upload.php');
$pdf->PrintChapter(2, 'LOS PROS Y LOS CONTRAS', '../upload.php');
$pdf->Output();
