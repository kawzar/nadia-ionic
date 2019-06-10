import { Injectable } from '@angular/core';
export interface IDocument{
  _id:string;
  title: string;
  content: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  documents: IDocument[] = [{
    _id: "1",
    title: "Title 1",
    content: "test 1 content blabla"
  },{
    _id: "2",
    title: "Title 2",
    content: "content 2 bla bla bla"
  }];

  constructor() { }

  getDocuments(){
    return this.documents;
  }

  getDocumentById(id){
    return this.documents.find(x => x._id == id);
  }
}
