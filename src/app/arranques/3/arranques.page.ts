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
      { equipo: "Ventilación correcta", estado: "", recomendacion: "", },
      { equipo: "Distancia a paredes y equipos", estado: "", recomendacion: "", },
      { equipo: "Válvula seguridad compresor", estado: "", recomendacion: "", },
      { equipo: "Conexión neumática flexible", estado: "", recomendacion: "", },
      { equipo: "Soportería adecuada", estado: "", recomendacion: "", },
      { equipo: "Válvula de prueba", estado: "", recomendacion: "", },
      { equipo: "Válvula de isolación", estado: "", recomendacion: "", },
      { equipo: "Cuello Ganzo salida Compr.", estado: "", recomendacion: "", },
      { equipo: "Diámetro de tubería aire", estado: "", recomendacion: "", },
      { equipo: "Purga hacia Drenaje", estado: "", recomendacion: "", },
      { equipo: "Nivel del piso", estado: "", recomendacion: "", },
      { equipo: "Conexión eléctrica adecuada", estado: "", recomendacion: "", },
      { equipo: "Tamaño Flip - on", estado: "", recomendacion: "", },
      { equipo: "Cable Calibre No.", estado: "", recomendacion: "", },
      { equipo: "Diámetro ducto eléctrico", estado: "", recomendacion: "", },
      { equipo: "Temperatura del Cuarto", estado: "", recomendacion: "", },
      { equipo: "Tierra Física Comp.Std", estado: "", recomendacion: "", },
      { equipo: "Tierra Física Comp.Vel variable", estado: "", recomendacion: "", },

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
