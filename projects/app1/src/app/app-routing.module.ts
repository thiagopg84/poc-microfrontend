import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { Sample1Component } from './sample1/sample1.component';

const routes: Routes = [
  { path: '1', component: SampleComponent },
  { path: '2', component: Sample1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
