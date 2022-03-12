import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPortalComponent } from './admin-portal.component';

const routes: Routes = [
    {
        path: '',
        component: AdminPortalComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminPortalRoutingModule {}
