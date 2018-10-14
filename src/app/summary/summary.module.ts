import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';
import { OverviewComponent } from './overview/overview.component';
import {SummaryRoutingModule} from "./summary-routing.module";


@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    SummaryRoutingModule
  ],
  providers: [
  ],
  declarations: [OverviewComponent]
})
export class SummaryModule {
}
