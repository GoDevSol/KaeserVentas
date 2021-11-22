import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/api/services.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'addSaleOrderComponent-form',
  templateUrl: './addSaleOrder.component.html',
  styleUrls: ['./addSaleOrder.component.scss'],
})
export class AddSaleOrderComponent implements OnInit {

  id;
  tipoEquipo = { tipo: "" };
  file;
  fileName = '';

  modelo: any = []


  constructor(private modalCtrl: ModalController, private storage: Storage, private api: ServicesService) {

  }

  async ngOnInit() {


    this.modelo = await this.storage.get('postVenta');
    this.fileName = this.modelo.direccionArchivo.split('\\')[2]


  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }

  async loadData() {
    var data = new FormData()
    data.append('file', this.file)
    data.append('id', this.modelo.id)

    var response = await this.api.loadFile(data);

    this.modelo.direccionArchivo = response
    await this.storage.set('postVenta', this.modelo);
    await this.modalCtrl.dismiss();


  }



  openDialog() {
    document.getElementById('fileid').click();


  }

  loadFile(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name

  }


}
