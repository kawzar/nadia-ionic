import { Component, OnInit } from '@angular/core';
import { ApiService, IDocument } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  ngOnInit(): void {
  }

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDocumentById(this.id).subscribe(res => {
      this.document = res;
    });
   }

  document: IDocument;
  id: string;

  ionViewDidEnter() {
    
  }
 
  edit(form){
    console.log(this.document);
    this.api.updateDocumentById(this.id, this.document).subscribe((res)=>{
      this.router.navigateByUrl('/menu/home');
    });
  }
}
