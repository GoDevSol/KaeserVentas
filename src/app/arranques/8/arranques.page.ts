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

  options: any =
    [
      { equipo: "By - pass filtro elevado", estado: "", recomendacion: "", },
      { equipo: "Purga hacia drenaje", estado: "", recomendacion: "", },
      { equipo: "Cuello de Ganzo", estado: "", recomendacion: "", },
      { equipo: "Trampa del filtro", estado: "", recomendacion: "", },
      { equipo: "Indicador de Nivel al frente", estado: "", recomendacion: "", },
    ];

  constructor(private navCtrl: NavController, private api: ServicesService) {

  }
  async ngOnInit() {



  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async generarPDF() {
    console.log(this.options)
  }

  async goForward(ruta) {

    this.navCtrl.navigateForward('menu/' + ruta)
  }


}
