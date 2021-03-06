import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        data: {
            breadcrumb: 'home',
        },
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    },
    {
        path: 'admin-portal',
        data: {
            breadcrumb: 'admin-portal',
        },
        loadChildren: () => import('./pages/admin-portal/admin-portal.module').then(m => m.AdminPortalModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
