import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  URL = "https://godevsol.tech/kaeserVentas/api/req/";
  //URL = "https://localhost/kaeserVentas/api/req/";

  constructor(private storage: Storage, public toastController: ToastController) { }


  //DB

  async getDBItem(name) {
    this.storage.create();
    var item = await this.storage.get(name);
    if (item == null) return []
    return item;
  }

  async setDBItem(name, item) {
    await this.storage.create();
    await this.storage.set(name, item)
  }

  async cleanDBItem(name) {
    await this.storage.create();
    await this.storage.remove(name)
  }



  //toast

  async showToast(msg, header) {
    const toast = await this.toastController.create({
      color: 'dark',
      message: msg,
      header: header,
      position: 'top',
      duration: 1500
    });
    toast.present();
  }


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



  //COTIZACIONES

  async readCotizacionAll() {
    return await this.resolverSolicitud(this.URL + "Cotizaciones/read.php");
  }

  async readCotizacion(state) {
    return await this.resolverSolicitudParams(this.URL + "Cotizaciones/readByEstado.php", state);
  }

  async saveCotizacion(json) {
    return await this.resolverSolicitudParams(this.URL + "Cotizaciones/create.php", json);
  }

  async modificarCotizacion(json) {
    return await this.resolverSolicitudParams(this.URL + "Cotizaciones/updateById.php", json);
  }





  //FILE
  async loadFile(file) {
    return await this.resolverSolicitudSinJSON(this.URL + "upload.php", file);
  }

  async getFile(id) {
    return await this.resolverSolicitudParams(this.URL + "verificar.php", id);
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
