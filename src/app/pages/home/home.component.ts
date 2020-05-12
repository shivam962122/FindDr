import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }
  slideOpts = {
    initialSlide: 0,
    autoplay: {
    speed: 3000
    }
  };
  ngOnInit() {}
  

}
