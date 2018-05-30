import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Profile} from "../../interfaces/Profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public  profile = {} as Profile ;

  constructor(public navCtrl: NavController
            ,public modalCtrl : ModalController  //modal 컨트롤러 관련 추가
       ) {

  }

  //modal 페이지 띄우기
  modal(){
     let modal = this.modalCtrl.create('ModalPage') //modal 페이지 component name 을 적어줌
     modal.onDidDismiss( data => {
      // console.log( data );
       //console.log( data.actionSwitch );
       //console.log( data.name );
       //console.log( data.gender );
       //console.log( data.domestic );
       //console.log( data.startDate );

       this.profile.actionSwitch = data.actionSwitch;
       this.profile.name = data.name;
       this.profile.gender = data.gender;
       this.profile.domestic = data.domestic;
       this.profile.startDate = data.startDate;

     }); // arrow  function
      modal.present();
  }

}
