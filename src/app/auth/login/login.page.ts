import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loaderToShow: any;

  constructor(private authService: AuthService, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    console.log("login");
  }

  login(form){
    this.showLoader();
    this.authService.login(form.value).subscribe((res)=>{
      this.hideLoader();
      this.router.navigateByUrl('/menu/home');
    });
  }
  
  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Cargando...'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }
}
