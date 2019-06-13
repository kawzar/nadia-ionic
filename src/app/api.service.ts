import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from  '@ionic/storage';
import { AuthService } from './auth/auth.service';

export interface IDocument{
  _id:string;
  title: string;
  content: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected API: string = "https://upcn-salud-api.now.sh/api"
  protected token: string;

  constructor(private http: HttpClient, private storage: Storage, private auth: AuthService){
    this.getToken();
  }
  
  getDocuments() {
    return this.http.get<IDocument[]>(this.API + '/documents')
  }

  getDocumentById(id: string){
    return this.http.get<IDocument>(this.API + '/documents/' + id)
  }

  updateDocumentById(id, document){
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.token})
    };
    return this.http.put(this.API +'/documents/' + id, document, httpOptions);
  }

  addDocument(document){
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.token})
    };
    
    return this.http.post(this.API +'/documents/', document, httpOptions);
  }

  deleteDocumentById(id){
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.token})
    };

    return this.http.delete(this.API + '/documents/' + id, httpOptions);
  }

  getToken() {
    this.storage.get('ACCESS_TOKEN').then((token) => {   
      this.token = token; 
    }); 
  };
}
