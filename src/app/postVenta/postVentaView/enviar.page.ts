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

  constructor(private navCtrl: NavController, public toastController: ToastController, private storage: Storage) {


  }

  async ngOnInit() {

    this.modelosStorage = await this.storage.get('modelos');
    this.datosForm = await this.storage.get('datosForm');

    console.log(this.modelosStorage)
    console.log(this.datosForm)
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }


  async handleButtonClick() {
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Se ha enviado la solicitud de cotizacion exitosamente.',
      header: 'Cotizacion',
      position: 'top',
      duration: 1500
    });
    this.navCtrl.navigateBack('menu/' + 'register')
    toast.present();
  }

  sendMail(value) {

    this.handleButtonClick()

  }



}
