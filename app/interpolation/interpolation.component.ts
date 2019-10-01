import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

public name = "Name variable";
public myId = "id attribute";
public hasError = true;
public isSpecial =  true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}


public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  // new method
  onClick(event){
    console.log(event);
    this.greeting = 'the event type was ' + event.type;
  }

  greetUser(){
    console.log('greetUser');
  }
  logMessage(value){
    this.name = value;
  }

}
