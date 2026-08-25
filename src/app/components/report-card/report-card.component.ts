import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProgressReport } from '../../services/report.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
  standalone: false
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
