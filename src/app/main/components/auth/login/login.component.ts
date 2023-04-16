import { Component,OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AccountService } from 'src/app/main/service/account.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {
    
    loading = false;
    valCheck: string[] = ['remember'];
    submitted=false;
    returnUrl?:string;

    form:FormGroup=new FormGroup({
        phone_number:new FormControl(''),
        password:new FormControl('')
    });

    //password!: string;

    constructor(
                private formBuilder:FormBuilder,
                private route:ActivatedRoute,
                private router:Router,
                public layoutService: LayoutService,
                private accountService:AccountService
                ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            phone_number:['',Validators.required],
            password:['',Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'/dashboard';
    }
    get f(){ return this.form.controls;}
    
    onSubmit(){
        debugger;
        this.submitted=true;

        const obj={
            phone_number:this.f['phone_number'].value,
            version_number:'1.0.0',
            app_id:'csapp',
            password:this.f['password'].value
        }
        this.accountService.login(obj)
        .subscribe(data=>{
            console.log('success data',data);
            this.router.navigate([this.returnUrl]);
        },error=>{
            console.log('error',error);
            this.router.navigate(["/"])
        });
    }

    
}
