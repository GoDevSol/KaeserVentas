import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ServicesService } from './../api/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  formLogin: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private api: ServicesService, public toastController: ToastController) {

    this.formLogin = this.formBuilder.group({
      user: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })

  }

  async ngOnInit() {
    await this.api.clearAll()

  }

  async getToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      header: 'Usuario o Contraseña incorrectos.',
      position: 'top',
      duration: 750
    });
    toast.present();
  }

  async loginUser(credentials) {
    const login = await this.api.login(credentials)

    if (login.message == "Successful login.") {

      await this.api.setDBItem("JWT", login.jwt);

      await this.api.setDBItem("isLogged", true);
      this.formLogin.reset()


      this.router.navigateByUrl("menu/register");
    } else {
      this.getToast()
    }


  }

}
