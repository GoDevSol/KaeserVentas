import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterFormComponent } from '../modals/registerForm/register-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

}
