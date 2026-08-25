import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText
} from '@ionic/angular';
import { ReportService, ProgressReport } from '../services/report.service';
import { ReportCardComponent } from '../components/report-card/report-card.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonText,
    ReportCardComponent
  ]
})
export class ViewPage implements OnInit {
  private reportService = inject(ReportService);
  private router = inject(Router);

  public segmentValue: string = 'view';
  public selectedChild: string = '';
  public allReports: ProgressReport[] = [];
  public filteredReports: ProgressReport[] = [];
  public scoredReports: ProgressReport[] = [];

  public children: string[] = [
    'John Doe',
    'Jake Peralta',
    'Charles Boyle',
    'Amy Santiago',
    'Rosa Diaz'
  ];

  ngOnInit() {
    this.loadReports();
  }

  ionViewWillEnter() {
    this.segmentValue = 'view';
    this.loadReports();
  }

  onSegmentChange(event: any) {
    const val = event.detail.value;
    if (val && val !== 'view') {
      this.router.navigate(['/' + val]);
    }
  }

  loadReports() {
    this.allReports = this.reportService.getReports();
    this.filterReports();
  }

  onChildChange(event?: any) {
    if (event && event.target && event.target.value !== undefined) {
      this.selectedChild = event.target.value;
    } else if (event && event.detail !== undefined && event.detail.value !== undefined) {
      this.selectedChild = event.detail.value;
    }
    this.filterReports();
  }

  filterReports() {
    if (!this.allReports) {
      this.filteredReports = [];
      this.scoredReports = [];
      return;
    }

    if (!this.selectedChild) {
      this.filteredReports = [...this.allReports];
    } else {
      this.filteredReports = this.allReports.filter(r => r && r.learner === this.selectedChild);
    }

    this.scoredReports = this.filteredReports.filter(r => r && r.score !== null && r.score !== undefined);
  }

  getAverageScore(): number {
    if (!this.scoredReports || this.scoredReports.length === 0) return 0;
    const total = this.scoredReports.reduce((sum, r) => sum + Number(r.score || 0), 0);
    return Math.round((total / this.scoredReports.length) * 10) / 10;
  }

  onReportSelected(report: any) {
    console.log('Selected report:', report);
  }
}
