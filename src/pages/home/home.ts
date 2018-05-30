import {Component} from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
import {Profile} from "../../interfaces/Profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public  profile = {} as Profile ;

  constructor(public navCtrl: NavController
            ,public modalCtrl : ModalController  //modal 컨트롤러 관련 추가
              ,public alertCtrl : AlertController //alert 컨트롤러 관련 추가
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

       if (Object.keys(data).length === 0){
         //property 값이 없는경우 , close () 호출해서 리턴된 경우
         console.log(data);
       } else {
         this.profile.actionSwitch = data.actionSwitch;
         this.profile.name = data.name;
         this.profile.gender = data.gender;
         this.profile.domestic = data.domestic;
         this.profile.startDate = data.startDate;
       }
     }); // arrow  function
      modal.present();
  }


    showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "이름과 E메일 주소를 입력하세요.",
        inputs: [
          {
            name: 'name',
            placeholder: '이름 입력'
          },{
            name: 'email',
            placeholder: 'E메일 입력'
          },
        ],
        buttons: [
          {
            text: '취소',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '저장',
            handler: data => {
              console.log('Saved clicked');
              //
            }
          }
        ]
      });
      prompt.present();
    }


}
