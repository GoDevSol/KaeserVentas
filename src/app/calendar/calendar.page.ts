import { ServicesService } from 'src/app/api/services.service';
import { CalendarComponent } from 'ionic2-calendar/calendar'
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'calendarPage',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = []
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }



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


}
