import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent } from '@ionic/angular';
import { ProgressReport } from '../../services/report.service';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    FeedbackComponent
  ]
})
export class ReportCardComponent {
  @Input() report!: ProgressReport;
  @Input() showDetails: boolean = true;
  @Output() cardClick = new EventEmitter<ProgressReport>();

  onCardClick() {
    this.cardClick.emit(this.report);
  }

  isHighScore(score?: number | null): boolean {
    return score !== null && score !== undefined && score >= 90;
  }
}
