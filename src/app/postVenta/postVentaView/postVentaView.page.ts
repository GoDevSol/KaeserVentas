import { ServicesService } from 'src/app/api/services.service';
import { AddSaleComponent } from '../../modals/addSaleOrder/add-sale.component';
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
  opcion: any = "";

  constructor(private navCtrl: NavController, private api: ServicesService, private modalCtrl: ModalController, public toastController: ToastController) { }

  async ngOnInit() {

  }

  async goTo(back) {
    var respuesta = await this.api.getDBItem("return")
    console.log(respuesta)
    if (respuesta) {
      this.navCtrl.navigateBack('menu/' + 'cotizacionesAll');
    } else {
      this.navCtrl.navigateBack('menu/' + back);
    }
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }


  async showModal() {

    const modal = await this.modalCtrl.create({
      component: AddSaleComponent,
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

    this.opcion = await this.api.getDBItem("opcion")

    var postVenta = await this.api.getDBItem('postVenta');
    this.modelosStorage = postVenta.datosModelos
    this.datosForm = postVenta.datosForm
    this.direccionArchivo = postVenta.direccionArchivo

    if (this.direccionArchivo != "") {
      this.direccionArchivo = this.direccionArchivo.split('\\')[2]
    }

  }

  async Process() {

    const user = await this.api.getInfoUser()

    var postVenta = await this.api.getDBItem('postVenta');
    // if (postVenta.direccionArchivo == "") {
    //   this.api.showToast('Por favor ingrese una orden de compra para poder procesar la cotizacion.', 'Post Venta');
    //   return
    // }

    var data = {
      id: postVenta.id,
      datosForm: JSON.stringify(postVenta.datosForm),
      datosModelos: JSON.stringify(postVenta.datosModelos),
      //direccionArchivo: postVenta.direccionArchivo,
      estado: 2

    }
    await this.api.modificarCotizacion(data);
    this.api.showToast('Post Venta procesada exitosamente', 'Post Venta');

    var confMail = { url: 'cotizacion.php', datosForm: this.datosForm, modelos: this.modelosStorage, user: user, titulo: "POSTVENTA" };

    await this.api.sendMail(confMail)

    this.navCtrl.navigateBack('menu/' + 'register')




  }


  async ProcessEjecutar() {

    var postVenta = await this.api.getDBItem('postVenta');

    var data = {
      id: postVenta.id,
      datosForm: JSON.stringify(postVenta.datosForm),
      datosModelos: JSON.stringify(postVenta.datosModelos),
      direccionArchivo: postVenta.direccionArchivo,
      estadoC4C: 1,
      estado: postVenta.estado

    }
    await this.api.modificarCotizacion(data);
    this.api.showToast('Post Venta procesada en C4C exitosamente', 'C4C Checklist');
    this.navCtrl.navigateBack('menu/' + 'register')
  }

  async ProcessVersion() {

    var postVenta = await this.api.getDBItem('postVenta');


    var data = {
      id: postVenta.id,
      datosForm: JSON.stringify(postVenta.datosForm),
      datosModelos: JSON.stringify(postVenta.datosModelos)

    }
    await this.api.modificarCotizacionAndVersion(data);

    this.api.showToast('Se ha creado una nueva version para esta cotizacion.', 'Post Venta');

    this.navCtrl.navigateBack('menu/' + 'register')
  }


  ionViewWillEnter(): void {
    this.getData();
  }





}
