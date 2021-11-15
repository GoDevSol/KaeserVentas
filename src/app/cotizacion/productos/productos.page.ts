import { RegisterFormComponent } from './../../modals/registerForm/register-form.component';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/api/services.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  tiposEquipo: any = [];

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private api: ServicesService) {

  }




  async showModal(id) {
    const modal = await this.modalCtrl.create({
      component: RegisterFormComponent,
      componentProps: {
        id: id
      }
    })
    await modal.present();
  }

  async ngOnInit() {
    this.tiposEquipo = await this.api.getTiposEquipo()
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  SendEmail(value) {

  }



}