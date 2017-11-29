import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {observable} from "rxjs/symbol/observable";
import {BlogStructure} from "./BlogStructure";


const BASE_URL = 'https://the-blogging-society.herokuapp.com/Blogs';
@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getBlogs():Observable<any>{
    return this.http.get(BASE_URL)
      .map(res => res.json()).catch(err => {return Observable.throw(err);
      });
  }

  getBlog(id):Observable<any>{
    return this.http.get(`${BASE_URL}/${id}`)
      .map(res => res.json()).catch(err => {return Observable.throw(err);
      });
  }

  postBlog(data) {
    return this.http.post(BASE_URL,data)
      .map(res => res.json());
  }

  deleteBlog(id:number):Observable<any> {
    let url = BASE_URL + "/" + id;
    console.log(url);
    return this.http.delete(url).map(res =>{
      res.json()}).catch(err => {
      return Observable.throw(err);
    });
  }

  updateBlog(data:BlogStructure):Observable<any> {
    return this.http.patch(`${BASE_URL}/${data.id}`, data).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

}
