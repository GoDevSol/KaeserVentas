import { ServicesService } from 'src/app/api/services.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private navCtrl: NavController, private api: ServicesService) {


  }

  ngOnInit() {

  }
  async Exec(as) {
    this.navCtrl.navigateBack('login')
    this.api.clearAll()
    document.location.replace(('login'))

  }

}
