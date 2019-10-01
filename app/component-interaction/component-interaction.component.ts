import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentData') public dataFromRoot;

  // custom event
  @Output() public childEvent = new EventEmitter();

  public name = "**This is my Name**";
  public message = "**this is my message**";
  public person={
    "firstName":"mason",
    "lastName" : "breece"
  }

  public date = new Date();


  constructor() { }

  ngOnInit() {
  }

  //this will send child event to reciver
  fireEvent(){
    this.childEvent.emit('this is the child event')
  }

}
