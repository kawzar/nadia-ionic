import { Component, OnInit } from '@angular/core';
import { ApiService, IDocument } from 'src/app/api.service';
import { Router } from '@angular/router';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  document: IDocument = {content: '', title :'', _id: null};
  buttonDisabled = false;
  loaderToShow : any;

  constructor(private api: ApiService, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
  }
 
  add(form){
    this.buttonDisabled = true;
    this.showLoader();
    this.api.addDocument(this.document).subscribe((res)=>{  
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
    }, 2000);
  }
}
