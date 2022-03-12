import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPortalComponent } from './admin-portal.component';
import { SingleChildComponent } from './single-child/single-child.component';

const routes: Routes = [
    {
        path: '',
        component: AdminPortalComponent,
    },
    {
        path: 'single-child',
        component: SingleChildComponent,
    },
    {
        path: 'children-module',
        loadChildren: () => import('./children-module/children-routing.module').then(m => m.ChildrenRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminPortalRoutingModule {}
