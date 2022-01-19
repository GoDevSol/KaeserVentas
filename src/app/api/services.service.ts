import { ToastController, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  URL = "https://godevsol.tech/kaeserVentas/api/req/";
  //URL = "https://localhost/kaeserVentas/api/req/";

  constructor(private storage: Storage, public toastController: ToastController, private navCtrl: NavController) { }


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

  async clearAll() {
    await this.storage.create();
    await this.storage.clear();
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

  async getInfoUser(credentials) {
    return await this.resolverSolicitudParams(this.URL + "login/validate_token.php", credentials);
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
    var jwt = await this.getDBItem("JWT")
    var newJson = { jwt: jwt }
    return await this.resolverSolicitudParams(this.URL + "Cotizaciones/read.php", newJson);
  }

  async readCotizacion(state) {
    var jwt = await this.getDBItem("JWT")
    var newJson = { ...state, jwt: jwt }
    return await this.resolverSolicitudParams(this.URL + "Cotizaciones/readByEstado.php", newJson);
  }

  async saveCotizacion(json) {
    return await this.resolverSolicitudParamsWithOutAData(this.URL + "Cotizaciones/create.php", json);
  }

  async modificarCotizacion(json) {
    return await this.resolverSolicitudParams(this.URL + "Cotizaciones/updateById.php", json);
  }



  //USER

  async modificarUsuario(json) {
    var jwt = await this.getDBItem("JWT")
    var newJson = { ...json, jwt: jwt }
    return await this.resolverSolicitudParams(this.URL + "user/updateUser.php", newJson);
  }

  async modificarUsuarioJWT(json) {
    var jwt = await this.getDBItem("JWT")
    var newJson = { ...json, jwt: jwt }
    return await this.resolverSolicitudParams(this.URL + "user/updateUserJWT.php", newJson);
  }

  async updatePassword(json) {
    var jwt = await this.getDBItem("JWT")
    var newJson = { ...json, jwt: jwt }
    return await this.resolverSolicitudParamsWithOutAData(this.URL + "user/updateUserPassword.php", newJson);
  }

  async updatePasswordJWT(json) {
    var jwt = await this.getDBItem("JWT")
    var newJson = { ...json, jwt: jwt }
    return await this.resolverSolicitudParamsWithOutAData(this.URL + "user/updateUserPasswordJWT.php", newJson);
  }

  async getAllUser() {
    return await this.resolverSolicitud(this.URL + "user/read.php");
  }


  //FILE
  async loadFile(file) {
    return await this.resolverSolicitudSinJSON(this.URL + "upload.php", file);
  }

  async getFile(id) {
    return await this.resolverSolicitudParams(this.URL + "verificar.php", id);
  }


  //REPORTE

  async createPDF(json) {
    return await this.resolverSolicitudParamsWithOutParse(this.URL + "pdf/pdfCreation.php", json);
  }

  async createPDFDetalle(json) {
    return await this.resolverSolicitudParamsWithOutParse(this.URL + "pdf/pdfCreationDetalle.php", json);
  }







  //MAIL

  async sendMail(json) {
    return await this.resolverSolicitudParams(this.URL + "email/" + json.url, json);
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
    console.log(result)
    //this.navCtrl.navigateBack('login')
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

  async resolverSolicitudParamsWithOutParse(url, json) {
    var data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(json)
    })

    var string64 = await data.text()

    const linkSource = string64;
    //const downloadLink = document.createElement("a");
    //downloadLink.href = linkSource;
    //downloadLink.download = "jenner.pdf";
    //downloadLink.click();

    let pdfWindow = window.open("")
    pdfWindow.document.write(
      "<iframe width='100%' height='100%' src='" +
      string64 + "'></iframe>"
    )

  }


};


