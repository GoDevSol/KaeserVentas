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
  fecha: any = ""

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

    console.log(this.api.createPDF({ modelos: this.modelos, fecha: this.fecha, estado: this.estado }))
  }


  async goToPostVenta(ruta, modelo) {
    await this.api.setDBItem("postVenta", modelo)
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  onChange(event) {

    if (event.name == "ESTADO") {
      this.estado = event.value;
      if (event.value == 0) {
        this.modelos = this.modelosAll;
      } else {
        this.modelos = this.modelosAll.filter(s => s.estado == event.value);
      }

    } else {
      if (event.value == "") {
        this.modelos = this.modelosAll;
      } else {
        var mydate2: any = new Date(event.value.replace(/-/g, '\/'));
        this.fecha = mydate2;
        this.modelos = this.modelosAll.filter(s => {

          var mydate: any = new Date(s.date);

          mydate = mydate.getFullYear() + '/' + (mydate.getMonth() + 1) + '/' + mydate.getDate()
          mydate2 = mydate2.getFullYear() + '/' + (mydate2.getMonth() + 1) + '/' + mydate2.getDate()

          if (mydate == mydate2) {
            return true
          }
        });
      }
      console.log(this.modelosAll)

    }


  }

}
