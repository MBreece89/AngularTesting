import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'; 

import { AuthGuard } from './auth.guard';



const routes: Routes = [
                        { path: '', pathMatch: 'full', redirectTo: 'login'},
                        { path: 'login', component: LoginComponent },
                        { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
                        // { path: '', redirectTo: '/departments', pathMatch: 'full' },
                        { path: 'departments', component: DepartmentListComponent },
                        {  path: 'departments/:id', component: DepartmentDetailComponent,
                           children: [
                                        { path: 'overview', component: DepartmentOverviewComponent },
                                        { path: 'contact', component: DepartmentContactComponent }
                                     ]},
                        { path: 'employees', component: EmployeeDetailComponent },
                        { path: "**", component: PageNotFoundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  DepartmentListComponent,
                                  EmployeeDetailComponent,
                                  DepartmentDetailComponent,
                                  PageNotFoundComponent,
                                  DepartmentContactComponent,
                                  DepartmentOverviewComponent
                                ];
