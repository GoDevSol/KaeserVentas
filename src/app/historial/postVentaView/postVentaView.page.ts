import { ServicesService } from 'src/app/api/services.service';
import { AddSaleOrderComponent } from './../../modals/addSaleOrder/addSaleOrder.component';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-enviar',
  templateUrl: './postVentaView.page.html',
  styleUrls: ['./postVentaView.page.scss'],
})
export class postVentaView implements OnInit {
  modelosStorage: any = [];
  datosForm: any = [];

  constructor(private navCtrl: NavController, private api: ServicesService, private modalCtrl: ModalController, public toastController: ToastController, private storage: Storage) {


  }

  async ngOnInit() {
    this.storage.create()
    var postVenta = await this.storage.get('postVenta');

    this.modelosStorage = postVenta.datosModelos
    this.datosForm = postVenta.datosForm
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

  async showModal() {

    const modal = await this.modalCtrl.create({
      component: AddSaleOrderComponent,
      componentProps: {
        id: ""
      },
      backdropDismiss: false
    })

    await modal.present();
    //await modal.onDidDismiss();
    //this.getData();

  }

  async Process() {
    var postVenta = await this.storage.get('postVenta');

    var data = {
      id: postVenta.id,
      datosForm: JSON.stringify(postVenta.datosForm),
      datosModelos: JSON.stringify(postVenta.datosModelos),
      direccionArchivo: postVenta.direccionArchivo

    }
    this.api.modificarCotizacion(data);

  }




}
