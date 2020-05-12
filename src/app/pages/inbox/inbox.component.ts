import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {

  constructor() { }
  items = [{id:1,text:"Hello!!"},{id:2,text:"Hi!!"},{id:3,text:"Hey!!"},{id:4,text:"Oh!!"}]
  ngOnInit() {}

}
