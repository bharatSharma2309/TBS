import { Component, OnInit } from '@angular/core';
import {BlogStructure} from "../blog-list/BlogStructure";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../blog-list/blog.service";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: number;
  blog : BlogStructure;
  shouldBlogBeEditable : boolean = false;

  constructor(private _route:ActivatedRoute,
              private _blogService: BlogService,
              private  router: Router) {

  };

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');

    this._blogService.getBlog(this.id).subscribe(res => {
      this.blog = res as BlogStructure;
      console.log(this.blog);
    }, err => {
      console.log(err);
    });
  }

  toggleEditing(){
    this.shouldBlogBeEditable = !this.shouldBlogBeEditable;
  }

  deleteThisBlog(id:number){
    console.log(id);
    debugger;
    this._blogService.deleteBlog(this.id).subscribe(res => {
      this.router.navigate(['']);
    },err =>{
      console.log(err);
    });

    alert('Blog has been deleted!');
  }

  updateThisBlog(){
    debugger;
    let title:string = (<HTMLInputElement>document.getElementById("blogTitle")).value ;
    let content:string = (<HTMLInputElement>document.getElementById("blogContent")).value ;
    let author:string = (<HTMLInputElement>document.getElementById("blogAuthor")).value ;
    let category:string = (<HTMLInputElement>document.getElementById("blogCategory")).value ;

    let data = new BlogStructure(title,content,author,category,this.blog.id);
    this._blogService.updateBlog(data).subscribe(blog=>{this.blog=blog;
      this.router.navigate(['']);},err =>{
      console.log(err);
    });
    this.toggleEditing();
  }

  showBlogEditor(blog){

    this.router.navigate([blog.id+'/update']);
  }

}
