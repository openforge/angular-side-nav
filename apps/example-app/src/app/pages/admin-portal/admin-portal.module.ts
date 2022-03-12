import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalRoutingModule } from './admin-portal-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, AdminPortalRoutingModule],
    declarations: [AdminPortalComponent],
})
export class AdminPortalModule {}
