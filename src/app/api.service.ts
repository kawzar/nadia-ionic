import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient){}
  
  getDocuments() {
    return this.http.get<IDocument[]>(this.API + '/documents')
  }

  getDocumentById(id: string){
    return this.http.get<IDocument>(this.API + '/documents/' + id)
  }
}
