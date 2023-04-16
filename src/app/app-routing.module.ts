import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './main/components/auth/login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path:'',loadChildren:()=>import('./main/components/auth/login/login.module').then(m=>m.LoginModule)},
            { path: 'dashboard', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./main/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./main/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    // { path: 'utilities', loadChildren: () => import('./main/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    // { path: 'blocks', loadChildren: () => import('./main/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./main/components/auth/auth.module').then(m => m.AuthModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
