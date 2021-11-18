import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/api/services.service';
import { Storage } from '@ionic/storage-angular';

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
  modelosAgregados: any = []

  constructor(private modalCtrl: ModalController, private storage: Storage, private api: ServicesService) {

  }

  async ngOnInit() {
    this.modelos = await this.api.getModelosByTipoEquipo({ "idTipoEquipo": this.id })

    this.modelos = this.modelos.map(x => ({
      ...x,
      cantidad: 0
    }))

    this.modelosAll = this.modelos.filter(s => s.modelo.includes(""));
    this.tipoEquipo = await this.api.getTipoEquipoById({ "id": this.id })

    this.modelosAgregados = await this.storage.get('modelos');
    this.modelosAgregados.forEach(element => {
      this.upsert(this.modelos, element)
    });




  }

  async dismissModal() {
    this.storage.create();
    this.storage.set("modelos", this.modelosAgregados);
    await this.modalCtrl.dismiss();

  }

  filter(event) {
    this.modelos = this.modelosAll.filter(s => s.modelo.includes(event.value));
  }

  sumar(model) {

    model.cantidad++
    this.upsert(this.modelosAgregados, model)

  }

  restar(model) {
    if (!(model.cantidad == 0)) {
      model.cantidad--
      this.upsert(this.modelosAgregados, model)
    }
  }

  upsert(array, element) {
    const i = array.findIndex(_element => _element.id === element.id);
    if (element.cantidad == 0) array.splice(i, 1)
    else if (i > -1) array[i] = element; // (2)
    else array.push(element);
  }


}
