import { RegisterFormComponent } from '../../modals/registerForm/register-form.component';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  postVenta: any = [];
  tiposEquipo: any = [];
  modelosStorage: any = [];;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private api: ServicesService) { }


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
    this.postVenta = await this.api.getDBItem('postVenta');
    this.modelosStorage = this.postVenta.datosModelos
    this.api.setDBItem('modelos', this.modelosStorage);
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    var postVenta = await this.api.getDBItem('postVenta');
    postVenta.datosModelos = this.modelosStorage
    await this.api.setDBItem('postVenta', postVenta);
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  async getData() {
    this.modelosStorage = await this.api.getDBItem('modelos');
  }

}
