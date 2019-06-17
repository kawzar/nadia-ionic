import { Component, OnInit } from '@angular/core';
import { ApiService, IDocument } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  document: IDocument = {content: '', title :'', _id: null};

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }
 
  add(form){
    this.api.addDocument(this.document).subscribe((res)=>{
      this.router.navigateByUrl('/menu/home');
    });
  }
}
