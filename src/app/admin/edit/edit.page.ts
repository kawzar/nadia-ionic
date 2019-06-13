import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
 
  edit(form){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.updateDocumentById(id, form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }
}
