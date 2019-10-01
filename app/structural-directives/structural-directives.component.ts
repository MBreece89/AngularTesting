import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  displayName = true;
  public color = 'red';
  public colors = ["red","blue","green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(){
    if(this.displayName){
        this.displayName=false;
    }
    else if(!this.displayName){
        this.displayName =true;
    }
    else{
      console.log("you broke it")
    }
  }

}
