import { Component, OnInit } from '@angular/core';

@Component({
  // Selector is the new custom html tag used to call this components html
  // you can change app-test to .app-test to make it a class to add to a div tag
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
