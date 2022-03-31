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
            // NOTE:  Order definitely matthers here!
            {
                path: 'single-child',
                component: SingleChildComponent,
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideNavComponent,
            },
            {
                path: 'children-module',
                loadChildren: () => import('./children-module/children.module').then(m => m.ChildrenModule),
            },
        ],
    },
    {
        path: 'children-module-in-place-of-admin-portal',
        loadChildren: () => import('./children-module/children.module').then(m => m.ChildrenModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminPortalRoutingModule {}
