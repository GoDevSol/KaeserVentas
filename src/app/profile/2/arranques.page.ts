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
  usersAll: any;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private api: ServicesService) {
    this.formUser = this.formBuilder.group({
      user: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.required])),
      nombres: new FormControl("", Validators.compose([Validators.required])),
      correo: new FormControl("", Validators.compose([Validators.required])),
      pais: new FormControl("", Validators.compose([Validators.required])),
      puesto: new FormControl("", Validators.compose([Validators.required])),
      rol: new FormControl("", Validators.compose([Validators.required]))
    })

    this.formPassword = this.formBuilder.group({
      password: new FormControl("", Validators.compose([Validators.required])),
      passwordConfirm: new FormControl("", Validators.compose([Validators.required]))
    })

  }

  async ngOnInit() {

    this.usersAll = await this.api.getAllUser()

  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }



  async onChange(ruta) {

    var result = this.usersAll.filter(obj => {
      return obj.id == ruta.value
    })
    this.datosForm = result[0]

    this.formUser.controls.user.setValue(this.datosForm.user);
    this.formUser.controls.nombres.setValue(this.datosForm.nombres);
    this.formUser.controls.correo.setValue(this.datosForm.correo);
    this.formUser.controls.pais.setValue(this.datosForm.pais);
    this.formUser.controls.puesto.setValue(this.datosForm.puesto);
    this.formUser.controls.rol.setValue(this.datosForm.rol);

  }


  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }

  async modificar(ruta) {

    this.datosForm.correo = this.formUser.value.correo
    this.datosForm.nombres = this.formUser.value.nombres
    this.datosForm.pais = this.formUser.value.pais
    this.datosForm.puesto = this.formUser.value.puesto
    this.datosForm.rol = this.formUser.value.rol

    var data = await this.api.modificarUsuarioJWT(this.datosForm);

    this.api.showToast("Se ha modificado la informacion exitosamente.", "Datos Usuario")

    this.navCtrl.navigateBack('menu/' + ruta)

  }

  async contrasena(ruta) {
    var data = await this.api.updatePasswordJWT({ ...this.formPassword.value, user: this.datosForm });
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
