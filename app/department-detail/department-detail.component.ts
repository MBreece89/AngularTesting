import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: `./department-detail.component.html`,
  styleUrls: ['../app.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));

    // this.departmentID=id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentID = id;
    });
  }

  goPrevious(){
    let previousID = this.departmentID - 1;
    this.router.navigate(['/departments', previousID]);
  }

  goNext(){
    let nextID = this.departmentID + 1;
    this.router.navigate(['/departments', nextID]);
  }

  gotoDepartments(){
    let selectedId = this.departmentID ? this.departmentID : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }
  
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
