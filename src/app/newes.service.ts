import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewesService {
 url:string="http://localhost:8080/"
  constructor(private http: HttpClient) { }
  getTopicList(){
    return this.http.get(this.url+"getTopicList")
  }
  getNewContent(id:number){

     // Initialize Params Object
     let params = new HttpParams();
     // Begin assigning parameters
     params = params.append('id', id.toString());
    return this.http.get(  `${this.url}getNewContent`, { params: params })

  
  }
}
