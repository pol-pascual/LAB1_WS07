import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonInput,
  IonTextarea,
  IonButton,
  IonButtons
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
    IonInput,
    IonTextarea,
    IonButton,
    IonButtons
  ]
})
export class HomePage {
  private reportService = inject(ReportService);
  private router = inject(Router);

  public segmentValue: string = 'home';
  public selectedLearner: string = '';
  public selectedReportType: string = '';
  public score: number | null = null;
  public remarks: string = '';
  public selectedFileName: string = '';

  ionViewWillEnter() {
    this.segmentValue = 'home';
  }

  onSegmentChange(event: any) {
    const val = event.detail.value;
    if (val && val !== 'home') {
      this.router.navigate(['/' + val]);
    }
  }

  public learners: string[] = [
    'John Doe',
    'Jake Peralta',
    'Charles Boyle',
    'Amy Santiago',
    'Rosa Diaz'
  ];

  public reportTypes: string[] = [
    'Seatwork',
    'Take Home Assignment',
    'Daily Progress Report',
    'Annual Performance Review'
  ];

  public isSubmitted: boolean = false;

  public onFileChange(event: any) {
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
