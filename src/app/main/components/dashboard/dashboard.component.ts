import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    userCategory:string='User';

    constructor(
            private productService: ProductService, 
            public layoutService: LayoutService,
            private router:Router) {
    }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }


    finduser(category:number){
        debugger;
        this.router.navigate(['/dashboard/userdetails']);
        this.userCategory=category===0?'User':'Manager';
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
