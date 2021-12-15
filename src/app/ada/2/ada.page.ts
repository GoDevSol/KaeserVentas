import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ada',
  templateUrl: './ada.page.html',
  styleUrls: ['./ada.page.scss'],
})
export class AdaPage implements OnInit {
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

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.api.setDBItem("datosForm", this.formRegister.value)
    this.navCtrl.navigateForward('menu/' + ruta)
  }


}
