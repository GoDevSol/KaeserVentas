import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from 'src/app/api/services.service';

@Component({
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
})
export class AddSaleComponent implements OnInit {

  id;
  tipoEquipo = { tipo: "" };
  file;
  fileName = '';

  modelo: any = []


  constructor(private modalCtrl: ModalController, private api: ServicesService) {

  }

  async ngOnInit() {
    this.modelo = await this.api.getDBItem('postVenta');
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
    await this.api.setDBItem('postVenta', this.modelo);
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
