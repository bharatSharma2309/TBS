import { Component, OnInit } from '@angular/core';
import {BlogStructure} from "./BlogStructure";
import {BlogService} from "./blog.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs : BlogStructure[] = [];
  filteredBlogs : BlogStructure[] = [];
  searchQuery: string;
  searchCriteria: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    debugger;
    this.blogService.getBlogs().subscribe(res => {
      this.filteredBlogs=this.blogs = res as BlogStructure[];
      console.log(this.blogs);
    }, err => {
      console.log(err);
    });
  }


  filterOnCategory(value: string){

    this.searchCriteria = value;
    this.blogService.getBlogs().subscribe(res => {
      this.filteredBlogs=this.blogs = res as BlogStructure[];
      //this.filteredBlogs=this.blogs;
      this.filteredBlogs = this.performFilter(this.searchCriteria);
      console.log(this.filteredBlogs);
      console.log(this.blogs);
    }, err => {
      console.log(err);
    });
  }
  performFilter(filterBy: string){
    return this.blogs.filter((blog:BlogStructure)=>blog.blogCategory.indexOf(filterBy)!== -1);
  }


  filterOnTitle(value: string){
    this.searchQuery = value;
    this.blogService.getBlogs().subscribe(res => {
      this.filteredBlogs=this.blogs = res as BlogStructure[];
      //this.filteredBlogs=this.blogs;
      this.filteredBlogs = this.performFilterOnTitle(this.searchQuery);
      console.log(this.filteredBlogs);
      console.log(this.blogs);
    }, err => {
      console.log(err);
    });
  }

  performFilterOnTitle(filterBy: string){
    return this.blogs.filter((blog:BlogStructure)=>blog.blogTitle.indexOf(filterBy)!== -1);
  }

}
