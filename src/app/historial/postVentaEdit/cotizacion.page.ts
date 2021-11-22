import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  formRegister: FormGroup;
  postVenta: {
    datosForm: {
      oportunidad: "",
      oferta: "",
      idCliente: "",
      nombreCliente: "",
      direccion: "",
      contacto: "",
      condicionPago: "",
      moneda: "",
      porcentajeDescuento: "",
      correoCliente: ""
    }
  };

  constructor(public toastController: ToastController, private formBuilder: FormBuilder, private navCtrl: NavController, private storage: Storage) {
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
    this.storage.create()
    this.postVenta = await this.storage.get('postVenta');

    var datosForm = this.postVenta.datosForm

    this.formRegister.controls.oportunidad.setValue(datosForm.oportunidad);
    this.formRegister.controls.oferta.setValue(datosForm.oferta);
    this.formRegister.controls.idCliente.setValue(datosForm.idCliente);
    this.formRegister.controls.nombreCliente.setValue(datosForm.nombreCliente);
    this.formRegister.controls.direccion.setValue(datosForm.direccion);
    this.formRegister.controls.contacto.setValue(datosForm.contacto);
    this.formRegister.controls.condicionPago.setValue(datosForm.condicionPago);
    this.formRegister.controls.moneda.setValue(datosForm.moneda);
    this.formRegister.controls.porcentajeDescuento.setValue(datosForm.porcentajeDescuento);
    this.formRegister.controls.correoCliente.setValue(datosForm.correoCliente);

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.storage.create()

    this.postVenta.datosForm = this.formRegister.value

    this.storage.set("postVenta", this.postVenta)

    this.navCtrl.navigateForward('menu/' + ruta)
  }

  SendEmail(value) {

  }



}
