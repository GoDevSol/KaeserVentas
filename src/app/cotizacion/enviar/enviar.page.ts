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

    const user = await this.api.getInfoUser()

    var data = {
      datosForm: JSON.stringify(this.datosForm),
      datosModelos: JSON.stringify(this.modelosStorage),
      direccionArchivo: "",
      idUser: user.id

    }


    const save = await this.api.saveCotizacion(data)

    this.api.showToast('Se ha enviado la solicitud de cotizacion exitosamente.', "Cotizacion",)

    var confMail = { url: 'cotizacion.php', id: save.id, datosForm: this.datosForm, modelos: this.modelosStorage, user: user, titulo: "COTIZACION" };

    await this.api.sendMail(confMail)

    this.navCtrl.navigateBack('menu/' + 'register')
  }



}
