import { Injectable } from '@angular/core';

export interface ProgressReport {
  id: number | string;
  learner: string;
  reportType: string;
  score?: number | null;
  remarks?: string;
  fileName?: string;
  createdAt: Date;
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

  addReport(reportData: Partial<ProgressReport>) {
    const newReport: ProgressReport = {
      id: Date.now(),
      learner: reportData.learner || '',
      reportType: reportData.reportType || '',
      score: reportData.score !== undefined && reportData.score !== null && (reportData.score as any) !== '' ? Number(reportData.score) : null,
      remarks: reportData.remarks || '',
      fileName: reportData.fileName || '',
      createdAt: new Date()
    };
    this.reports.unshift(newReport);
  }
}
