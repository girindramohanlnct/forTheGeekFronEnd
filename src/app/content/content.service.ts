import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }


  getContentByTitle(title:string) {

    return this.http.get<{message:string, contents:Content}>("http://localhost:8000/api/getContentByTitle/"+title);
  }
}
