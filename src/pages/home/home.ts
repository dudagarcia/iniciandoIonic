import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ //configura componente e dependências
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
