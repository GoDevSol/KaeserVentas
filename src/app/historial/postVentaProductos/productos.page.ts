import { RegisterFormComponent } from '../../modals/registerForm/register-form.component';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/api/services.service';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {


  tiposEquipo: any = [];
  modelosStorage: any = [];;
  postVenta: any = [];;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private api: ServicesService, private storage: Storage) {


  }


  async showModal(id) {
    const modal = await this.modalCtrl.create({
      component: RegisterFormComponent,
      componentProps: {
        id: id
      },
      backdropDismiss: false
    })

    await modal.present();
    await modal.onDidDismiss();
    this.getData();




  }

  async ngOnInit() {
    this.tiposEquipo = await this.api.getTiposEquipo()

    this.storage.create()
    this.postVenta = await this.storage.get('postVenta');

    this.modelosStorage = this.postVenta.datosModelos

    this.storage.set('modelos', this.modelosStorage);
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {

    this.storage.create()

    this.postVenta.datosModelos = this.modelosStorage

    this.storage.set("postVenta", this.postVenta)

    this.navCtrl.navigateForward('menu/' + ruta)
  }

  async getData() {
    this.modelosStorage = await this.storage.get('modelos');

  }

  SendEmail(value) {

  }



}
