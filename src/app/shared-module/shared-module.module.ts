import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { HeaderComponent } from '../shared_component/header/header.component';
import { MainboxComponent } from '../shared_component/mainbox/mainbox.component';
import { SidebarComponent } from '../shared_component/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainboxComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,ReactiveFormsModule

  ],providers : []
})
export class SharedModuleModule { }
