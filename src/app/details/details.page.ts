import { Component, OnInit } from '@angular/core';
import { IDocument, ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  document: IDocument;
  searchText: string;
  loaderToShow: any;

  constructor(private api: ApiService, private route: ActivatedRoute, public loadingController: LoadingController) { 
    let id = this.route.snapshot.paramMap.get('id');
    let filter = this.route.snapshot.paramMap.get('filter');
    this.showLoader();

    this.api.getDocumentById(id).subscribe(res => {
      this.document = res;
      this.hideLoader();
    })
    this.searchText = filter;
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

  ngOnInit() {}

}
