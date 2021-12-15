import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'arranques',
  templateUrl: './arranques.page.html',
  styleUrls: ['./arranques.page.scss'],
})
export class ArranquesPage implements OnInit {

  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private api: ServicesService) {
    this.formRegister = this.formBuilder.group({
      oportunidad: new FormControl("", Validators.compose([Validators.required])),
      oferta: new FormControl("", Validators.compose([Validators.required])),
      idCliente: new FormControl("", Validators.compose([Validators.required]))
    })

  }

  async ngOnInit() {


    var datosForm: any = this.api.getDBItem("datosForm")

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
    this.api.setDBItem("datosForm", this.formRegister.value)
    this.navCtrl.navigateForward('menu/' + ruta)
  }


}
