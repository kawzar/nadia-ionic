import { Component } from '@angular/core';
import { IDocument, ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  documents: IDocument[];

  constructor(private api: ApiService) {}

  ionViewDidEnter(){
    this.api.getDocuments().subscribe(res =>
      this.documents = res)
  }
}
