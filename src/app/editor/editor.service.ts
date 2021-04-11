import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../content/content.model';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpClient) {}

  getPostForEdit(id:string) {
   return this.http.get<{ message:string, content:Content }>("http://localhost:8000/api/getPostForUpdate/"+ id);
  }

  updatePost(id:string, post:Content) {
    return this.http.put<{ message:string, content:Content }>("http://localhost:8000/api/updatePost/"+ id, post);
  }
}
