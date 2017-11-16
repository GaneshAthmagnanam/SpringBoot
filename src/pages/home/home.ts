import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:any;
  prop:any;
  msg:any;
  errorMsg:any;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController,public db: AngularFireDatabase) {

  }
  submit(){
    
    if(this.validateEmail(this.email)){
    try{
      this.db.list('/learners').push({
        email: this.email
        }).then(success=>{
          //alert("Great you are in");
          this.msg="Great you are in";
          this.email="";
          this.presentAlert();
        })
    }
    catch(e){
      this.errorMsg=e;
    }
  }
  }
  validateEmail(email)   
  {  
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
    {  
      return (true)  
    }  
      alert("You have entered an invalid email address!")  
      return (false)  
  } 
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: '!!Congrats!!',
      subTitle: 'You are in',
      buttons: ['OK']
    });
    alert.present();
  } 
  
}
