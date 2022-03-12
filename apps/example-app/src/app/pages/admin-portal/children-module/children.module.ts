import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChildrenModuleComponent } from './children-module.component';
import { ChildrenRoutingModule } from './children-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ChildrenRoutingModule],
    declarations: [ChildrenModuleComponent],
})
export class ChildrenModule {}
