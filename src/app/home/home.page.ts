import { Component } from '@angular/core';
import { IDocument, ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  documents: IDocument[];
  filter = {searchStr: ''};
  searchButtonIsDisabled = false;
  loaderToShow: any;

  constructor(private api: ApiService, private router:Router, private auth: AuthService, public loadingController: LoadingController) {}

  ionViewDidEnter(){
    this.showLoader();
    this.getDocuments();
    this.hideLoader();
  }

  delete($id){
    if(confirm("¿Está segurx de querer borrar este documento?")) {
      this.showLoader();
      this.api.deleteDocumentById($id).subscribe(res => 
        this.api.getDocuments().subscribe(res => {
          this.hideLoader()
          this.documents = res
        })
      )
    }
  }

  edit($id){
    this.router.navigateByUrl('/menu/edit/' + $id);
  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }

  onSearchClicked($event){
    $event.preventDefault();
    this.searchButtonIsDisabled = true;
    this.showLoader();
    this.api.getDocumentByFilter(this.filter).subscribe(res =>
      this.documents = res.sort((a, b) => a.title.localeCompare(b.title)));
      this.searchButtonIsDisabled = false;
      this.hideLoader();
  }

  onClearSearchClicked($event){
    this.showLoader();
    this.getDocuments();
    this.filter.searchStr = '';
    this.searchButtonIsDisabled = false;
    this.hideLoader();
  }

  getDocuments(){
    this.api.getDocuments().subscribe(res =>
    this.documents = res.sort((a, b) => a.title.localeCompare(b.title)));      
    this.hideLoader();
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Cargando...'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
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
