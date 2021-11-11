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
  tipoEquipo = { tipo: 0 };
  modelos: any = []

  constructor(private modalCtrl: ModalController, private api: ServicesService) {

  }

  async ngOnInit() {
    this.modelos = await this.api.getModelosByTipoEquipo({ "idTipoEquipo": this.id })
    this.tipoEquipo = await this.api.getTipoEquipoById({ "id": this.id })

    console.log(this.tipoEquipo)


  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }


}
