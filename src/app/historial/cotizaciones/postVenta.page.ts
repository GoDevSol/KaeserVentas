import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-postVenta',
  templateUrl: './postVenta.page.html',
  styleUrls: ['./postVenta.page.scss'],
})
export class PostVentaPage implements OnInit {
  modelos: any = []
  modelosAll: any = []

  estado: any = 0
  fecha: Date

  constructor(private navCtrl: NavController, private api: ServicesService) { }

  async ngOnInit() {
    this.modelos = await this.api.readCotizacionAll();
    this.modelosAll = await this.modelos.map(x => {
      x.datosForm = JSON.parse(x.datosForm.replaceAll('&quot;', '"'))
      x.datosModelos = JSON.parse(x.datosModelos.replaceAll('&quot;', '"'))
      return x
    })

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async createPDF() {
    var fecha: any = -1;
    if (this.fecha != undefined) {

      if (!isNaN(this.fecha.valueOf())) {
        fecha = this.fecha
      }
    }
    this.api.createPDF({ modelos: this.modelos, fecha: fecha, estado: this.estado })
  }

  async createPDFDetalle() {
    var fecha: any = -1;
    if (this.fecha != undefined) {

      if (!isNaN(this.fecha.valueOf())) {
        fecha = this.fecha
      }
    }
    this.api.createPDFDetalle({ modelos: this.modelos, fecha: fecha, estado: this.estado })
  }





  onChange(event) {


    if (event.name == "ESTADO") {
      this.estado = event.value;
    } else if (event.name == "DATE") {
      this.fecha = new Date(event.value.replace(/-/g, '\/'));
    }

    this.modelos = this.modelosAll.filter(s => {

      var bandera = true;

      if (this.fecha != undefined) {
        if (!isNaN(this.fecha.valueOf())) {
          var mydate: any = new Date(s.date);
          var stringDate

          mydate = mydate.getFullYear() + '/' + (mydate.getMonth() + 1) + '/' + mydate.getDate()
          stringDate = this.fecha.getFullYear() + '/' + (this.fecha.getMonth() + 1) + '/' + this.fecha.getDate()

          if (mydate != stringDate) {
            bandera = false
          }
        }
      }
      if (this.estado == "") {
        return bandera
      } else {

        return s.estado.includes(this.estado)
      }


    });

  }



  async goToPostVenta(estado, modelo) {

    await this.api.setDBItem("return", true)
    await this.api.setDBItem("postVenta", modelo)
    if (estado == 1) {
      this.navCtrl.navigateForward('menu/postVentaView')
    }
    if (estado == 2) {
      this.navCtrl.navigateForward('menu/solicitudesView')
    }
    if (estado == 3) {
      this.navCtrl.navigateForward('menu/ejecutado-view')
    }


    console.log(estado)
    console.log(modelo)
  }

}
