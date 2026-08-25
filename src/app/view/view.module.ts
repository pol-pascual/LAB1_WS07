import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { ViewPageRoutingModule } from './view-routing.module';
import { ViewPage } from './view.page';
import { ReportCardComponent } from '../components/report-card/report-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule
  ],
  declarations: [ViewPage, ReportCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewPageModule {}
