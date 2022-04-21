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
      { equipo: "By-pass tanque", estado: "", recomendacion: "", },
      { equipo: "Entrada al tanque por abajo", estado: "", recomendacion: "", },
      { equipo: "Salida del Tanque por arriba", estado: "", recomendacion: "", },
      { equipo: "Tanque con sus tres llaves", estado: "", recomendacion: "", },
      { equipo: "Trampa del tanque", estado: "", recomendacion: "", },
      { equipo: 'Manómetro 4" min	', estado: "", recomendacion: "", },
      { equipo: "Filtro en Y para trampa", estado: "", recomendacion: "", },
      { equipo: "Válvula de seguridad", estado: "", recomendacion: "", },
      { equipo: "Anclaje y Otros accesorios", estado: "", recomendacion: "", },


    ];

  constructor(private navCtrl: NavController, private api: ServicesService) {

  }
  async ngOnInit() {



  }

  async goTo(ruta) {
    this.navCtrl.navigateBack('menu/' + ruta)
  }

  async show() {
    console.log(this.options)
  }

  async goForward(ruta) {

    this.navCtrl.navigateForward('menu/' + ruta)
  }


}
