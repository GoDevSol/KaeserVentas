import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private api: ServicesService) { }

  async ngOnInit() {
    await this.api.setDBItem("return", false)
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

}
