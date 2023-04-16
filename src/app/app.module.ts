import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { UserCreationComponent } from './main/components/user/usercreation/usercreation.component';

import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './main/service/product.service';
import { CountryService } from './main/service/country.service';
import { CustomerService } from './main/service/customer.service';
import { EventService } from './main/service/event.service';
import { IconService } from './main/service/icon.service';
import { NodeService } from './main/service/node.service';
import { PhotoService } from './main/service/photo.service';
import { AccountService } from './main/service/account.service';
import { UsersdetailsComponent } from './main/components/user/usersdetails/usersdetails.component';



@NgModule({
    declarations: [
        AppComponent, UserCreationComponent, UsersdetailsComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ReactiveFormsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService,AccountService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
