import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: `./department-list.component.html`,
  styleUrls: ['../app.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments=[
    { "id": 1, "name": "Angular"},
    { "id": 2, "name": "Node"},
    { "id": 3, "name": "MongoDB"},
    { "id": 4, "name": "Ruby"},
    { "id": 5, "name": "Bootstrap"},
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }
  iSelected(department){
    return department.id === this.selectedId;
  }

}
