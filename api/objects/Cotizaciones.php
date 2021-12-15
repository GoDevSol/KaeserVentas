<?php
include_once __DIR__ . '/../common/class/crud.php';

class Cotizaciones extends CRUD
{

    // DB connection y table name
    public $conn;
    public $table_name = "Cotizaciones";


    public $id;
    public $datosForm;
    public $datosModelos;
    public $direccionArchivo;
    public $estado;



    public function __construct($db)
    {
        $this->conn = $db;
    }


    function getAll()
    {
        return $this->_read("*", "", "", $this, "");
    }

    function existField($string)
    {
        $result = $this->_read("*", $string, "", $this, "");

        if ($this->validateStatus($result)) {

            $this->inputMappingObj((object) $result["data"][0], $this);

            return true;
        } else {

            return false;
        }
    }

    function loadById()
    {
        $result = $this->_read("*", "id=", "", $this, "");

        if ($this->validateStatus($result)) {

            $this->inputMappingObj((object) $result["data"][0], $this);
        }
    }

    public function getById()
    {
        return $this->_read("*", "id=", "", $this, "");
    }

    public function getByDatosForm()
    {
        return $this->_read("*", "datosForm=", "", $this, "");
    }

    public function getByDatosModelos()
    {
        return $this->_read("*", "datosModelos=", "", $this, "");
    }

    public function getByDireccionArchivo()
    {
        return $this->_read("*", "direccionArchivo=", "", $this, "");
    }

    public function getByEstado()
    {
        return $this->_read("*", "estado=", "", $this, "");
    }



    public function createCotizaciones()
    {
        $insertParams = "datosForm,datosModelos,direccionArchivo";

        return $this->_create($insertParams, $this);
    }

    function updateById()
    {
        $updateParams = $this->createParams($this, "id");

        $whereParams = "id=";

        return $this->_update($updateParams, $whereParams, $this);
    }
    function updateByDatosForm()
    {
        $updateParams = $this->createParams($this, "datosForm");

        $whereParams = "datosForm=";

        return $this->_update($updateParams, $whereParams, $this);
    }
    function updateByDatosModelos()
    {
        $updateParams = $this->createParams($this, "datosModelos");

        $whereParams = "datosModelos=";

        return $this->_update($updateParams, $whereParams, $this);
    }
    function updateByDireccionArchivo()
    {
        $updateParams = $this->createParams($this, "direccionArchivo");

        $whereParams = "direccionArchivo=";

        return $this->_update($updateParams, $whereParams, $this);
    }
    function updateByEstado()
    {
        $updateParams = $this->createParams($this, "estado");

        $whereParams = "estado=";

        return $this->_update($updateParams, $whereParams, $this);
    }


    function deleteById()
    {
        $whereParams = "id=";
        return $this->_delete($whereParams, $this);
    }
    function deleteByDatosForm()
    {
        $whereParams = "datosForm=";
        return $this->_delete($whereParams, $this);
    }
    function deleteByDatosModelos()
    {
        $whereParams = "datosModelos=";
        return $this->_delete($whereParams, $this);
    }
    function deleteByDireccionArchivo()
    {
        $whereParams = "direccionArchivo=";
        return $this->_delete($whereParams, $this);
    }
    function deleteByEstado()
    {
        $whereParams = "estado=";
        return $this->_delete($whereParams, $this);
    }
}
