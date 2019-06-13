import { Component, OnInit } from '@angular/core';
import { ApiService, IDocument } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  document: IDocument;
  id: string;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDocumentById(this.id).subscribe(res => {
      this.document = res;
    });
  }
 
  edit(form){
    this.api.updateDocumentById(this.id, form.value).subscribe((res)=>{
      this.router.navigateByUrl('/menu/home');
    });
  }
}
