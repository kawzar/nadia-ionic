import { Component } from '@angular/core';
import { IDocument, ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  documents: IDocument[];

  constructor(private api: ApiService, private router:Router) {}

  ionViewDidEnter(){
    this.api.getDocuments().subscribe(res =>
      this.documents = res)
  }

  removeItem(){

  }

  edit($id){
    this.router.navigateByUrl('/menu/edit/' + $id);
  }
}
