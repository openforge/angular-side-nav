import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { SingleChildComponent } from './single-child/single-child.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, AdminPortalRoutingModule],
    declarations: [AdminPortalComponent, SingleChildComponent, SideNavComponent],
})
export class AdminPortalModule {}
