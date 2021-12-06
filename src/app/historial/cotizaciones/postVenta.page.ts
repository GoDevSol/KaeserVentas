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

  async ngOnInit() {
    this.modelos = await this.api.readCotizacionAll();
    this.modelos = await this.modelos.map(x => {
      x.datosForm = JSON.parse(x.datosForm.replaceAll('&quot;', '"'))
      x.datosModelos = JSON.parse(x.datosModelos.replaceAll('&quot;', '"'))
      return x
    })
    console.log(this.modelos)
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goToPostVenta(ruta, modelo) {
    await this.api.setDBItem("postVenta", modelo)
    this.navCtrl.navigateForward('menu/' + ruta)
  }

}
