import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {BlogStructure} from "../blog-list/BlogStructure";

@Component({
  selector: 'app-blog-side-nav',
  templateUrl: './blog-side-nav.component.html',
  styleUrls: ['./blog-side-nav.component.css']
})
export class BlogSideNavComponent implements OnInit {

  @Input() blogToDisplay : BlogStructure;
  @Output() onClose = new EventEmitter<boolean>();
  shouldTheCardBeHidden:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeCard(){
    debugger;
    this.shouldTheCardBeHidden = true;
    this.onClose.emit(this.shouldTheCardBeHidden);
    return false;
  }

}
