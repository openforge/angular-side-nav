import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildrenModuleComponent } from './children-module.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

const routes: Routes = [
    {
        path: '',
        component: ChildrenModuleComponent,
        children: [
            {
                path: 'grand-child',
                component: GrandChildComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChildrenRoutingModule {}
