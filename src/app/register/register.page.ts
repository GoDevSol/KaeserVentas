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

  ngOnInit() {
    this.api.cleanDBItem("modelos")
    this.api.cleanDBItem("datosForm")
    this.api.cleanDBItem("postVenta")

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

}
