import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportService, ProgressReport } from '../services/report.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: false,
})
export class ViewPage implements OnInit, OnDestroy {
  selectedChild: string = '';
  allReports: ProgressReport[] = [];
  filteredReports: ProgressReport[] = [];
  scoredReports: ProgressReport[] = [];
  private reportSub!: Subscription;

  children: string[] = [
    'John Doe',
    'Jake Peralta',
    'Charles Boyle',
    'Amy Santiago',
    'Rosa Diaz'
  ];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportSub = this.reportService.reports$.subscribe(reports => {
      this.allReports = reports;
      this.filterReports();
    });
  }

  ngOnDestroy() {
    if (this.reportSub) {
      this.reportSub.unsubscribe();
    }
  }

  onChildChange() {
    this.filterReports();
  }

  filterReports() {
    if (!this.selectedChild) {
      this.filteredReports = this.allReports;
    } else {
      this.filteredReports = this.allReports.filter(r => r.learner === this.selectedChild);
    }

    this.scoredReports = this.filteredReports.filter(r => r.score !== null && r.score !== undefined);
  }

  getAverageScore(): number {
    if (this.scoredReports.length === 0) return 0;
    const total = this.scoredReports.reduce((sum, r) => sum + Number(r.score), 0);
    return Math.round((total / this.scoredReports.length) * 10) / 10;
  }
}
