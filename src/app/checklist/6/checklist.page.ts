import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  options: any =
    [
      { cable: "", SC1DP: "", SC2DP: "", SC2SNW: "", Modelo: "", PMax: "", Año: "", }
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

  sumar() {
    this.options.push({ cable: "", SC1DP: "", SC2DP: "", SC2SNW: "", Modelo: "", PMax: "", Año: "", });

  }

  restar(model) {
    if (!(this.options.length == 1)) {
      this.options.splice(model, 1)
    }
  }




}
