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
      { equipo: "Ventilación del secador", estado: "", recomendacion: "", },
      { equipo: "Distancia a las paredes", estado: "", recomendacion: "", },
      { equipo: "Distancia con otro equipo", estado: "", recomendacion: "", },
      { equipo: "By - pass Secador", estado: "", recomendacion: "", },
      { equipo: "Purga hacia drenaje", estado: "", recomendacion: "", },
      { equipo: "Diámentro de la tubería", estado: "", recomendacion: "", },
      { equipo: "Conexión eléctrica adecuada", estado: "", recomendacion: "", },
      { equipo: "Diamétro ducto eléctrico", estado: "", recomendacion: "", },
      { equipo: "Cable calibre No.", estado: "", recomendacion: "", },
      { equipo: "Tierra Física Sec.Std", estado: "", recomendacion: "", },
      { equipo: "Tierra Física Sec.Vel variable", estado: "", recomendacion: "", },
      { equipo: "Tamaño Flip - on", estado: "", recomendacion: "", },

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
