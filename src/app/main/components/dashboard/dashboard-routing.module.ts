import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserCreationComponent } from '../user/usercreation/usercreation.component';
import { UsersdetailsComponent } from '../user/usersdetails/usersdetails.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component:DashboardComponent,children:[
            {path:'dashboard/userdetails',component:UsersdetailsComponent}
        ]},
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
