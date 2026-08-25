import { Injectable } from '@angular/core';

export interface ProgressReport {
  id: number | string;
  learner: string;
  reportType: string;
  score?: number | null;
  remarks?: string;
  fileName?: string;
  createdAt: Date;
  feedbacks?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: ProgressReport[] = [];

  constructor() {}

  getReports(): ProgressReport[] {
    return this.reports;
  }

  getReportById(id: number | string): ProgressReport | undefined {
    return this.reports.find(r => String(r.id) === String(id));
  }

  addReport(reportData: Partial<ProgressReport>) {
    const newReport: ProgressReport = {
      id: Date.now(),
      learner: reportData.learner || '',
      reportType: reportData.reportType || '',
      score: reportData.score !== undefined && reportData.score !== null && (reportData.score as any) !== '' ? Number(reportData.score) : null,
      remarks: reportData.remarks || '',
      fileName: reportData.fileName || '',
      createdAt: new Date(),
      feedbacks: []
    };
    this.reports.unshift(newReport);
  }

  addFeedback(reportId: number | string, feedbackText: string) {
    const report = this.reports.find(r => r.id === reportId);
    if (report && feedbackText.trim()) {
      if (!report.feedbacks) {
        report.feedbacks = [];
      }
      report.feedbacks.push(feedbackText.trim());
    }
  }
}
