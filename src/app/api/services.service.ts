import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  URL = "https://godevsol.tech/kaeserVentas/api/req/";
  //URL = "http://localhost/kaeserVentas/api/req/";

  constructor() { }

  //LOGIN

  async login(credentials) {
    return await this.resolverSolicitudParamsWithOutAData(this.URL + "login/login.php", credentials);
  }

  //
  async getTiposEquipo() {
    return await this.resolverSolicitud(this.URL + "TiposEquipo/read.php");
  }

  async getTipoEquipoById(id) {
    return await this.resolverSolicitudParamsReturnOne(this.URL + "TiposEquipo/readById.php", id);
  }

  //MODELO

  async getModelosByTipoEquipo(id) {
    return await this.resolverSolicitudParams(this.URL + "Modelo/readByIdTipoEquipo.php", id);
  }



  //
  async saveCotizacion(json) {
    return await this.resolverSolicitudParams(this.URL + "TiposEquipo/read.php", json);
  }




  //RESOLVE

  async resolverSolicitud(url) {
    var data = await fetch(url)
    var result = await data.json()

    if (result.status == true) {
      return result.data;
    } else {
      return []
    }


  }

  async resolverSolicitudParams(url, json) {
    var data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(json)
    })
    var result = await data.json()

    return result.data;
  }


  async resolverSolicitudParamsReturnOne(url, json) {
    var data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(json)
    })
    var result = await data.json()
    return result.data[0];
  }



  async resolverSolicitudParamsWithOutAData(url, json) {
    var data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(json)
    })
    var result = await data.json()
    return result;
  }


  async resolverSolicitudSinJSON(url, file) {
    var data = await fetch(url, {
      method: "POST",
      body: file
    })
    var result = await data.json()

    return result.data;
  }





}
