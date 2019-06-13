import { Component } from '@angular/core';
import { IDocument, ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  documents: IDocument[];

  constructor(private api: ApiService, private router:Router, private auth: AuthService) {}

  ionViewDidEnter(){
    this.api.getDocuments().subscribe(res =>
      this.documents = res)
  }

  delete($id){
    if(confirm("¿Está segurx de querer borrar este documento?")) {
      this.api.deleteDocumentById($id).subscribe(res => 
        this.api.getDocuments().subscribe(res => 
          this.documents = res
        )
      )
    }
  }

  edit($id){
    this.router.navigateByUrl('/menu/edit/' + $id);
  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
}
