import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { AdminPortalComponent } from './admin-portal.component';
import { SingleChildComponent } from './single-child/single-child.component';

const routes: Routes = [
    {
        path: '', //admin-portal
        component: AdminPortalComponent,
        children: [
            {
                path: 'single-child',
                component: SingleChildComponent,
            },
            {
                path: '',
                outlet: 'side-menu-outlet',
                component: SideNavComponent,
            },
        ],
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
