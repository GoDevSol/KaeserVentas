import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterFormComponent } from '../modals/registerForm/register-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController, private api: ServicesService) { }
  user: any = {}

  async ngOnInit() {


    this.user = await this.api.getInfoUser()


    await this.api.setDBItem("return", false)
    await this.api.cleanDBItem("modelos")
    await this.api.cleanDBItem("datosForm")
    await this.api.cleanDBItem("postVenta")

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

}
