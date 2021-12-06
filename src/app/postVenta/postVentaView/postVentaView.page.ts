import { ServicesService } from 'src/app/api/services.service';
import { AddSaleOrderComponent } from './../../modals/addSaleOrder/addSaleOrder.component';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enviar',
  templateUrl: './postVentaView.page.html',
  styleUrls: ['./postVentaView.page.scss'],
})
export class postVentaView implements OnInit {
  modelosStorage: any = [];
  datosForm: any = [];
  direccionArchivo: any = "";

  constructor(private navCtrl: NavController, private api: ServicesService, private modalCtrl: ModalController, public toastController: ToastController) { }

  async ngOnInit() {
    this.getData();

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
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
    await modal.onDidDismiss();
    this.getData();

  }
  async getData() {
    var postVenta = await this.api.getDBItem('postVenta');

    this.modelosStorage = postVenta.datosModelos
    this.datosForm = postVenta.datosForm
    this.direccionArchivo = postVenta.direccionArchivo

    if (this.direccionArchivo != "") {
      this.direccionArchivo = this.direccionArchivo.split('\\')[2]
    }

  }

  async Process() {

    var postVenta = await this.api.getDBItem('postVenta');
    if (postVenta.direccionArchivo == "") {
      this.api.showToast('Por favor ingrese una orden de compra para poder procesar la cotizacion.', 'Post Venta');
      return
    }

    var data = {
      id: postVenta.id,
      datosForm: JSON.stringify(postVenta.datosForm),
      datosModelos: JSON.stringify(postVenta.datosModelos),
      direccionArchivo: postVenta.direccionArchivo,
      estado: 2

    }
    await this.api.modificarCotizacion(data);
    this.api.showToast('Post Venta procesada exitosamente', 'Post Venta');
    this.navCtrl.navigateBack('menu/' + 'register')


  }




}
