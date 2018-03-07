import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  maximumRecordsPerPage:number;
  arrayOfPagesToShow:number[] = [];
  currentPageSelected:number;
  numberOfPages: number;
  lastPage: number;

  constructor() { }

  ngOnInit() {
    // this.numberOfPages = 1;
    this.lastPage = 1;
    this.maximumRecordsPerPage = 3;
    // this.currentPageSelected = 1;

    this.changeCurrentPage(1);

  }

  changeCurrentPage(pageSelectedNow:number){

    if(pageSelectedNow<1){
      pageSelectedNow = 1;
    }

    if(pageSelectedNow>this.numberOfPages){
      pageSelectedNow = this.numberOfPages;
    }

    if(pageSelectedNow>=1 && pageSelectedNow<=this.lastPage){
      this.currentPageSelected = pageSelectedNow;

      if(pageSelectedNow-1>0 && this.numberOfPages-pageSelectedNow>0){
        this.arrayOfPagesToShow = [this.currentPageSelected-1, this.currentPageSelected, this.currentPageSelected+1];
        let div = document.getElementById('nextPageButton');
        let div2 = document.getElementById('lastPageButton');
        div.style.visibility = div2.style.visibility ='visible';

        let div3 = document.getElementById('firstPageButton');
        let div4 = document.getElementById('previousPageButton');
        div3.style.visibility= div4.style.visibility='visible';

      }
      else if(pageSelectedNow===1){
        this.arrayOfPagesToShow = [this.currentPageSelected, this.currentPageSelected+1, this.currentPageSelected+2];
        let div = document.getElementById('nextPageButton');
        let div2 = document.getElementById('lastPageButton');
        div.style.visibility= div2.style.visibility='visible';

        let div3 = document.getElementById('firstPageButton');
        let div4 = document.getElementById('previousPageButton');
        div3.style.visibility = div4.style.visibility ='hidden';
      }
      else {
        this.arrayOfPagesToShow = [this.currentPageSelected-2, this.currentPageSelected-1, this.currentPageSelected];
        let div = document.getElementById('firstPageButton');
        let div2 = document.getElementById('previousPageButton');
        div.style.visibility= div2.style.visibility='visible';

        let div3 = document.getElementById('nextPageButton');
        let div4 = document.getElementById('lastPageButton');
        div3.style.visibility= div4.style.visibility='hidden';
      }
    }
  }

  changeRecordsPerPage(recordsPerPageNow:number){
    debugger;
    this.maximumRecordsPerPage = recordsPerPageNow;
  }

  totalNumberOfPages(totalPages:number){
    console.log(totalPages +'Inside Totalnumberofpages');
    this.numberOfPages = totalPages;
    this.lastPage = totalPages;
  }

}
