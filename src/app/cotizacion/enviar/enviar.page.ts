import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.page.html',
  styleUrls: ['./enviar.page.scss'],
})
export class EnviarPage implements OnInit {

  constructor(private navCtrl: NavController, public toastController: ToastController) {


  }

  async ngOnInit() {

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
