import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  formRegister: FormGroup;

  constructor(public toastController: ToastController, private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.formRegister = this.formBuilder.group({
      oportunidad: new FormControl("", Validators.compose([Validators.required])),
      oferta: new FormControl("", Validators.compose([Validators.required])),
      idCliente: new FormControl("", Validators.compose([Validators.required])),
      nombreCliente: new FormControl("", Validators.compose([Validators.required])),
      direccion: new FormControl("", Validators.compose([Validators.required])),
      contacto: new FormControl("", Validators.compose([Validators.required])),
      condicionPago: new FormControl("", Validators.compose([Validators.required])),
      moneda: new FormControl("", Validators.compose([Validators.required])),
      porcentajeDescuento: new FormControl("", Validators.compose([Validators.required])),
      correoCliente: new FormControl("", Validators.compose([Validators.required]))
    })

  }

  async ngOnInit() {
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
