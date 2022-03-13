import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChildrenModuleComponent } from './children-module.component';
import { ChildrenRoutingModule } from './children-routing.module';
import { GrandChildComponent } from './grand-child/grand-child.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ChildrenRoutingModule],
    declarations: [ChildrenModuleComponent, GrandChildComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChildrenModule {}
