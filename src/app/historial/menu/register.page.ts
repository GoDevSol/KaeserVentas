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

  user: any = {}

  async ngOnInit() {
    var user = await this.api.getDBItem("User")
    this.user = user
    await this.api.setDBItem("return", false)
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

}
