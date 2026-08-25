import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ProgressReport {
  id: string;
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
  private reportsSubject = new BehaviorSubject<ProgressReport[]>([]);
  public reports$: Observable<ProgressReport[]> = this.reportsSubject.asObservable();

  constructor() {}

  getReports(): ProgressReport[] {
    return this.reportsSubject.getValue();
  }

  addReport(report: Omit<ProgressReport, 'id' | 'createdAt'>): ProgressReport {
    const newReport: ProgressReport = {
      ...report,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date()
    };
    const currentReports = this.getReports();
    const updatedReports = [newReport, ...currentReports];
    this.reportsSubject.next(updatedReports);
    return newReport;
  }
}
