import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }
 
  add(form){
    this.api.addDocument(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }
}
