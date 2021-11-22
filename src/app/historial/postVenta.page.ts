import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-postVenta',
  templateUrl: './postVenta.page.html',
  styleUrls: ['./postVenta.page.scss'],
})
export class PostVentaPage implements OnInit {
  formRegister: FormGroup;
  modelos: any = []

  constructor(public toastController: ToastController, private formBuilder: FormBuilder, private navCtrl: NavController, private storage: Storage, private api: ServicesService) {


  }

  async ngOnInit() {

    this.modelos = await this.api.readCotizacion();

    this.modelos = await this.modelos.map(x => {
      x.datosForm = JSON.parse(x.datosForm.replaceAll('&quot;', '"'))
      x.datosModelos = JSON.parse(x.datosModelos.replaceAll('&quot;', '"'))
      return x
    })

    console.log(this.modelos)

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goToPostVenta(ruta, modelo) {
    this.storage.create()
    this.storage.set("postVenta", modelo)
    this.navCtrl.navigateBack('menu/' + ruta)
  }


  SendEmail(value) {

  }



}
