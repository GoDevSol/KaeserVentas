import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-postVenta',
  templateUrl: './postVenta.page.html',
  styleUrls: ['./postVenta.page.scss'],
})
export class PostVentaPage implements OnInit {
  formRegister: FormGroup;
  modelos: any = []

  constructor(public toastController: ToastController, private formBuilder: FormBuilder, private navCtrl: NavController, private storage: Storage) {


  }

  async ngOnInit() {
    this.storage.create()
    this.modelos = await this.storage.get('modelos');
    console.log(this.modelos)


  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  SendEmail(value) {

  }



}
