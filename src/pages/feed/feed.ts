import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { a } from '@angular/core/src/render3';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage { //váriaveis devem ser criadas dentro do escopo da pagina -> propriedades
  public nomeUsuario:string = "Maria"; //public será vista pelo html (modificador de acesso) // tipo define valores a serem aceitos
  public somaDoisNumeros(): void{ //não retorna valor -> execução acaba dentro dela mesma
    alert(5+10);
  }
  public somaDoisValores(num1:number, num2:number): void{
    alert(num1 + num2);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { //ciclo de vida de uma página
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros();
    //this.somaDoisValores(10, 99);
  }

}
