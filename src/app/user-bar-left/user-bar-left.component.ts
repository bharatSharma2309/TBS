import { Component, OnInit } from '@angular/core';
import {TBSShared} from "../TBSShared";

@Component({
  selector: 'app-user-bar-left',
  templateUrl: './user-bar-left.component.html',
  styleUrls: ['./user-bar-left.component.css']
})
export class UserBarLeftComponent implements OnInit {
  public lastUpdationTime: Date;

  constructor() { }

  ngOnInit() {
    TBSShared.lastUpdate = new Date();
  }

}
