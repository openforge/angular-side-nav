import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildrenModuleComponent } from './children-module.component';

const routes: Routes = [
    {
        path: '',
        component: ChildrenModuleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChildrenRoutingModule {}
