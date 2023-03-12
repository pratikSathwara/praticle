import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainboxComponent } from '../shared_component/mainbox/mainbox.component';

const routes: Routes = [
  {
    path: '',
    component: MainboxComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }
