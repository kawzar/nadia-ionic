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

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.document = this.api.getDocumentById(id);
  }

}
