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

  formRegister: FormGroup;
  cantidad: any = 0;
  options: any =
    [
      { nombreEquipo: "", cantidad: "", parte: "", modelo: "", Serie: "", Descripcion: "", }
    ];

  constructor(private navCtrl: NavController, private api: ServicesService) {


  }

  async ngOnInit() {


  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async goForward(ruta) {
    this.navCtrl.navigateForward('menu/' + ruta)
  }


  agregar() {
    this.options.push({ cable: "", SC1DP: "", SC2DP: "", SC2SNW: "", Modelo: "", PMax: "", Año: "", });

  }

  quitar(model) {
    if (!(this.options.length == 1)) {
      this.options.splice(model, 1)
    }
  }

  sumar() {
    this.cantidad++
  }

  restar() {
    if (!(this.cantidad == 0)) {
      this.cantidad--

    }
  }


}
