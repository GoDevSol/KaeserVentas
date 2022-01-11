import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'arranques',
  templateUrl: './arranques.page.html',
  styleUrls: ['./arranques.page.scss'],
})
export class ArranquesPage implements OnInit {

  formUser: FormGroup;
  formPassword: FormGroup;
  datosForm: any;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private api: ServicesService) {
    this.formUser = this.formBuilder.group({
      user: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.required])),
      nombres: new FormControl("", Validators.compose([Validators.required])),
      correo: new FormControl("", Validators.compose([Validators.required])),
      pais: new FormControl("", Validators.compose([Validators.required])),
      puesto: new FormControl("", Validators.compose([Validators.required]))
    })

    this.formPassword = this.formBuilder.group({
      password: new FormControl("", Validators.compose([Validators.required])),
      passwordConfirm: new FormControl("", Validators.compose([Validators.required])),
      passwordOld: new FormControl("", Validators.compose([Validators.required]))
    })

  }

  async ngOnInit() {

    this.datosForm = await this.api.getDBItem("User")

    this.formUser.controls.user.setValue(this.datosForm.user);
    this.formUser.controls.nombres.setValue(this.datosForm.nombres);
    this.formUser.controls.correo.setValue(this.datosForm.correo);
    this.formUser.controls.pais.setValue(this.datosForm.pais);
    this.formUser.controls.puesto.setValue(this.datosForm.puesto);

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  async modificar(ruta) {
    var data = await this.api.modificarUsuario(this.formUser.value);
    this.datosForm.correo = data.correo
    this.datosForm.nombres = data.nombres
    this.datosForm.pais = data.pais
    this.datosForm.puesto = data.puesto
    await this.api.setDBItem("User", this.datosForm)
    this.api.showToast("Se ha modificado la informacion exitosamente.", "Datos Usuario")
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async contrasena(ruta) {
    var data = await this.api.updatePassword(this.formPassword.value);
    try {
      if (data.status == true) {
        this.api.showToast("Se ha modificado la contraseña exitosamente.", "Datos Usuario")
        this.navCtrl.navigateBack('menu/' + ruta)
      } else {
        this.api.showToast("No se ha podido actualizar la contraseña.", "Error")
      }

    } catch (error) {
      this.api.showToast("No se ha podido actualizar la contraseña.", "Error")
    }

  }




}
