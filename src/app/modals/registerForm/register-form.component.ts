import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  id;
  tipoEquipo = { tipo: "" };
  modelos: any = []
  modelosAll: any = []

  constructor(private modalCtrl: ModalController, private api: ServicesService) {

  }

  async ngOnInit() {
    this.modelos = await this.api.getModelosByTipoEquipo({ "idTipoEquipo": this.id })

    this.modelos = this.modelos.map(x => ({
      ...x,
      cantidad: 0
    }))

    this.modelosAll = this.modelos.filter(s => s.modelo.includes(""));
    this.tipoEquipo = await this.api.getTipoEquipoById({ "id": this.id })

    console.log(this.modelos)


  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
    alert("ADIOS")
  }

  filter(event) {
    this.modelos = this.modelosAll.filter(s => s.modelo.includes(event.value));
  }

  sumar(model) {
    model.cantidad++

  }

  restar(model) {
    if (!(model.cantidad == 0)) {
      model.cantidad--
    }
  }


}
