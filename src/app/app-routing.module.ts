import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RemoveTextComponent} from './components/remove-text/remove-text.component';

const routes: Routes = [{
  path:'',component:RemoveTextComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
