import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";

const summaryRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(summaryRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class SummaryRoutingModule {
}


