import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {BlogStructure} from "./BlogStructure";
import {BlogService} from "./blog.service";
import {PagerService} from "./pager.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnChanges{

  @Input() pageNumberToDisplay : number;
  @Input() recordsPerPage : number;
  @Output() totalNumberOfPages = new EventEmitter<number>();

  totalPages : number;
  blogs : BlogStructure[] = [];
  filteredBlogs : BlogStructure[] = [];
  filterButton : string;
  selectedBlog : BlogStructure;
  indicesToDisplayBlogsBetween : number[];
  totalResults: number;
  blogForModal : BlogStructure;

  constructor(private blogService: BlogService, private pagerService: PagerService) { }

  /**
   * subscribe, observables, promise, complete, map, filter, and all operators
   */
  ngOnInit() {
    this.totalResults = 1;
    this.filterButton = "All Blogs";
    this.getBlogs();
  }

  getBlogs(searchQueryForTitle:string = "empty", filterForCategory:string = "empty"){
    this.blogService.getBlogs(searchQueryForTitle, filterForCategory).subscribe(res => {
        this.blogs = res as BlogStructure[];
        console.log(this.blogs);
      }, err => {
        console.log(err);
      },
      () => {this.changeOrderOfBlogs();this.paginate();});

    this.hideCard();
  }

  ngOnChanges(){
    this.paginate();
    this.getPageNumber(this.pageNumberToDisplay);
    this.hideCard();
  }

  paginate(){
    this.totalResults = this.blogs.length;
    this.totalPages = this.pagerService.getTotalNumberOfPages(this.blogs.length, this.recordsPerPage);
    this.totalNumberOfPages.emit(this.totalPages);

    if(this.pageNumberToDisplay>this.totalPages){
      this.getPageNumber(1);
      this.pageNumberToDisplay = 1;
    }
    else{
      this.getPageNumber(this.pageNumberToDisplay);
    }

    this.blogForModal = this.blogs[0];
  }

  changeOrderOfBlogs(){
    debugger;
    this.blogs.reverse();
  }

  showBlogSlider(blogToDisplayOnCard: BlogStructure){
    debugger;
    let div = document.getElementById('blogSlider');

    if (div.style.display !== 'none' && this.selectedBlog.id===blogToDisplayOnCard.id){
      this.hideCard();
    }
    else{
      div.setAttribute("style","display:block;width:500px");
      div.style.width='500px';
      this.selectedBlog = blogToDisplayOnCard;
      console.log(this.selectedBlog);
      div.style.display = 'flex';
    }
    return false;//THIS IS HERE TO PREVENT THE SCROLL AFTER DISPLAY TOGGLE
  }

  ///Static Method can not be used for Output properties
  onClose(hideTheDiv:boolean){
    if(hideTheDiv){
      let div = document.getElementById('blogSlider');
      div.setAttribute("style","display:block;width:0px");
      div.style.width='0px';
      div.style.display = 'none';
    }
    return false;
  }

  getPageNumber(indexOfPageToFetch: number){
    this.indicesToDisplayBlogsBetween = this.pagerService.getIndicesForPage(indexOfPageToFetch);
    this.filteredBlogs = [];

    for(let i=this.indicesToDisplayBlogsBetween[0]; i<=this.indicesToDisplayBlogsBetween[1]; i++){
      if(!this.blogs[i]){
        break;
      }
      else{
        this.filteredBlogs.push(this.blogs[i]);
      }
    }
  }

  hideCard(){
    debugger;
    let div = document.getElementById('blogSlider');
    div.style.display = 'none';
  }

  getBlogsFromServer(searchQueryForTitle:string, filterForCategory:string){
    this.filterButton = filterForCategory;
    if(filterForCategory===''){
      this.filterButton = 'All Blogs';
    }

    if(this.filterButton ==='All Blogs'){
      filterForCategory = '';
    }

    this.getBlogs(searchQueryForTitle, filterForCategory);
  }

  setBlogForModal(idOfBlogToSetInModal:number){
    this.blogService.getBlog(idOfBlogToSetInModal);

    this.blogService.getBlog(idOfBlogToSetInModal).subscribe(res => {
      this.blogForModal = res as BlogStructure;
    }, err => {
      console.log(err);
    });
  }

  saveChangesInModalEditor(){

  }
}
