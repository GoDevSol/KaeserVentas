import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.page.html',
  styleUrls: ['./enviar.page.scss'],
})
export class EnviarPage implements OnInit {
  modelosStorage: any = [];
  datosForm: any = [];

  constructor(private navCtrl: NavController, private api: ServicesService) {


  }

  async ngOnInit() {
    this.modelosStorage = await this.api.getDBItem('modelos');
    this.datosForm = await this.api.getDBItem('datosForm');

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  async sendMail() {
    var data = {
      datosForm: JSON.stringify(this.datosForm),
      datosModelos: JSON.stringify(this.modelosStorage),
      direccionArchivo: ""

    }
    const save = await this.api.saveCotizacion(data)
    this.api.showToast('Se ha enviado la solicitud de cotizacion exitosamente.', "Cotizacion",)
    this.navCtrl.navigateBack('menu/' + 'register')
  }



}
