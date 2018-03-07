import { Injectable } from '@angular/core';
import {BlogStructure} from "./BlogStructure";

@Injectable()
export class PagerService {

  totalNumberOfPages: number;
  pageToReturn: BlogStructure[] = [];
  totalRecordsPerPage: number;
  currentIndex: number;
  blogsToReturnPageFrom: BlogStructure[] = [];
  indicesForPage: number[] = [];

  constructor() { }

  public getTotalNumberOfPages(totalRecords:number ,recordsPerPage:number){
    debugger;
    this.totalRecordsPerPage =recordsPerPage;
    this.totalNumberOfPages = Math.ceil(totalRecords/recordsPerPage);
    console.log(this.totalNumberOfPages);
    return this.totalNumberOfPages;
  }

  public getIndicesForPage(pageNumberRequested:number){
    debugger;
    this.indicesForPage[0] = this.totalRecordsPerPage * (pageNumberRequested - 1);
    this.indicesForPage[1] = (this.totalRecordsPerPage * pageNumberRequested) -1;
    console.log(this.indicesForPage);
    return this.indicesForPage;
  }
}
