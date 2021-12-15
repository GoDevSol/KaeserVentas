import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  formRegister: FormGroup;
  postVenta: any

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private api: ServicesService) {
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
      correoCliente: new FormControl("", Validators.compose([Validators.required])),
      observacion: new FormControl("", Validators.compose([Validators.required]))
    })

  }

  async ngOnInit() {

    this.postVenta = await this.api.getDBItem('postVenta');
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
    this.formRegister.controls.observacion.setValue(datosForm.observacion);

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.postVenta.datosForm = this.formRegister.value
    this.api.setDBItem("postVenta", this.postVenta)
    this.navCtrl.navigateForward('menu/' + ruta)
  }

}
