import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular';

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
  submittedData: any = null;

  constructor(
    private router: Router
  ) {}

  onFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = '';
    }
  }

  onSubmit() {
    this.submittedData = {
      learner: this.selectedLearner,
      reportType: this.selectedReportType,
      score: this.score,
      remarks: this.remarks,
      fileName: this.selectedFileName
    };

    this.isSubmitted = true;
    this.router.navigate(['/view']);
  }
}
