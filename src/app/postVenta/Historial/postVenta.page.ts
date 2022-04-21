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

  filterText: any = 0
  estado: any = 0

  fecha: Date

  constructor(private navCtrl: NavController, private api: ServicesService) { }
  user: any = {}

  async ngOnInit() {
    this.user = await this.api.getDBItem("User")

    const id = await this.api.getDBItem("idCotizacion")


    this.modelos = await this.api.readVersiones({ idCotizacion: id });


    console.log(this.modelos)

    this.modelosAll = await this.modelos.map(x => {
      x.datosForm = JSON.parse(x.datosForm.replaceAll('&quot;', '"'))
      x.datosModelos = JSON.parse(x.datosModelos.replaceAll('&quot;', '"'))
      return x
    })

    console.log(this.modelosAll)

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }


  async newVersion(modelo) {
    this.api.changeVersiones({ id: modelo.id, idCotizacion: modelo.idCotizacion })

  }

  async filter(event) {

    if (event.name == "FILTRO") {
      this.filterText = event.value
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

      if (this.filterText == "") {
        return bandera
      } else {
        return (s.datosForm.oportunidad + s.datosForm.nombreCliente + s.datosForm.idCliente).toUpperCase().includes(this.filterText.toUpperCase())
      }


    });



  }

}
