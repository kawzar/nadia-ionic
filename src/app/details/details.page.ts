import { Component, OnInit } from '@angular/core';
import { IDocument, ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  document: IDocument;

  constructor(private api: ApiService, private route: ActivatedRoute) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getDocumentById(id).subscribe(res =>
      this.document = res)
  }

  ionViewDidEnter() {
  
  }

  ngOnInit() {}

}
