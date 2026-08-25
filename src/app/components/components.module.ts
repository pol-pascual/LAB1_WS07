import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReportCardComponent } from './report-card/report-card.component';

@NgModule({
  imports: [CommonModule, IonicModule, ReportCardComponent],
  exports: [ReportCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
