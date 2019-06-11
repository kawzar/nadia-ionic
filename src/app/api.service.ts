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

  constructor(private http: HttpClient){}
  
  getDocuments() {
    return this.http.get<IDocument[]>('http://localhost:3000/api/documents')
  }

  getDocumentById(id: string){
    return this.http.get<IDocument>('http://localhost:3000/api/documents/' + id)
  }
}
