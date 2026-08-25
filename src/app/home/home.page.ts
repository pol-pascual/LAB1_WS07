import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ]
})
export class HomePage {
  private reportService = inject(ReportService);
  private router = inject(Router);

  selectedLearner: string = '';
  selectedReportType: string = '';
  score: number | null = null;
  remarks: string = '';
  selectedFileName: string = '';

  learners: string[] = [
    'John Doe',
    'Jake Peralta',
    'Charles Boyle',
    'Amy Santiago',
    'Rosa Diaz'
  ];

  reportTypes: string[] = [
    'Seatwork',
    'Take Home Assignment',
    'Daily Progress Report',
    'Annual Performance Review'
  ];

  isSubmitted: boolean = false;

  onFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = '';
    }
  }

  onSubmit() {
    if (!this.selectedLearner || !this.selectedReportType) {
      return;
    }

    this.reportService.addReport({
      learner: this.selectedLearner,
      reportType: this.selectedReportType,
      score: this.score,
      remarks: this.remarks,
      fileName: this.selectedFileName
    });

    this.isSubmitted = true;

    // Reset form inputs
    this.selectedLearner = '';
    this.selectedReportType = '';
    this.score = null;
    this.remarks = '';
    this.selectedFileName = '';

    // Navigate to View page
    this.router.navigate(['/view']);
  }
}
