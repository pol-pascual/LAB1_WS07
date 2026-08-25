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
  private reports: ProgressReport[] = [
    {
      id: 1,
      learner: 'John Doe',
      reportType: 'Seatwork',
      score: 85,
      remarks: 'Good progress on algebra exercises.',
      fileName: '',
      createdAt: new Date()
    },
    {
      id: 2,
      learner: 'Jake Peralta',
      reportType: 'Daily Progress Report',
      score: 92,
      remarks: 'Excellent focus today.',
      fileName: '',
      createdAt: new Date()
    },
    {
      id: 3,
      learner: 'Amy Santiago',
      reportType: 'Annual Performance Review',
      score: 98,
      remarks: 'Outstanding participation and results.',
      fileName: '',
      createdAt: new Date()
    }
  ];

  constructor() {}

  getReports() {
    return this.reports;
  }
}

