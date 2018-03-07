import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BlogStructure} from "./BlogStructure";
import "rxjs/add/operator/filter";
import {HttpClientModule} from "@angular/common/http";


const BASE_URL = 'http://localhost:58567/api/Blog';
@Injectable()
export class BlogService {

  constructor(public http: Http, private httpClient: HttpClientModule) {

  }

  getBlogs(searchQueryForTitle:string = "empty", filterForCategory:string = "empty"):Observable<any>{
    debugger;

    if(searchQueryForTitle===''){
      searchQueryForTitle='empty';
    }
    if(filterForCategory===''){
      filterForCategory='empty';
    }

    return this.http.get(`${BASE_URL}?searchCriteriaForTitle=${searchQueryForTitle}&filterCriteriaForCategory=${filterForCategory}`)
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
    let url = BASE_URL + '/' + id;
    console.log(url);
    return this.http.delete(`${url}`).map(res =>{
      res.json()}).catch(err => {
      return Observable.throw(err);
    });
  }

  updateBlog(data:BlogStructure):Observable<any> {
    return this.http.put(`${BASE_URL}/${data.id}`, data).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

}
