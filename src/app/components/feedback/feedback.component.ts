import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class FeedbackComponent {
  private reportService = inject(ReportService);

  @Input() reportId!: number | string;
  @Input() feedbacks: string[] = [];
  @Output() feedbackAdded = new EventEmitter<string>();

  public newFeedbackText: string = '';

  onSubmitFeedback() {
    if (!this.newFeedbackText.trim()) return;

    this.reportService.addFeedback(this.reportId, this.newFeedbackText);
    this.feedbackAdded.emit(this.newFeedbackText);
    this.newFeedbackText = '';
  }
}
