import { Component, OnInit } from '@angular/core';
import { ApiService, IDocument } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  ngOnInit(): void {
  }

  buttonDisabled = false;
  loaderToShow: any;
  document: IDocument = {title: '', content: '', _id: ''};
  id: string;

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute,  public loadingController: LoadingController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDocumentById(this.id).subscribe(res => {
      this.document = res;
    });
   }
 
  edit(form){
    this.buttonDisabled = true;
    this.showLoader();
    this.api.updateDocumentById(this.id, this.document).subscribe((res)=>{
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
