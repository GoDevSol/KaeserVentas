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

  constructor(private navCtrl: NavController, private api: ServicesService) { }
  user: any = {}

  async ngOnInit() {
    const user = await this.api.getDBItem("User")
    this.user = user
    this.modelos = await this.api.readCotizacion({ estado: 1 });
    this.modelos = await this.modelos.map(x => {
      x.datosForm = JSON.parse(x.datosForm.replaceAll('&quot;', '"'))
      x.datosModelos = JSON.parse(x.datosModelos.replaceAll('&quot;', '"'))
      return x
    })
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goToPostVenta(ruta, modelo) {
    console.log(modelo)
    await this.api.setDBItem("postVenta", modelo)
    await this.api.setDBItem("ejecutar", false)
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  async ejecutarCotizacion(ruta, modelo) {
    console.log(modelo)
    await this.api.setDBItem("postVenta", modelo)
    await this.api.setDBItem("ejecutar", true)
    this.navCtrl.navigateForward('menu/' + ruta)
  }

}
