import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  selectedLearner: string = '';
  selectedReportType: string = '';
  score: number | null = null;

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

  onSubmit() {
    this.submittedData = {
      learner: this.selectedLearner,
      reportType: this.selectedReportType,
      score: this.score
    };
    this.isSubmitted = true;
  }

  resetForm() {
    this.selectedLearner = '';
    this.selectedReportType = '';
    this.score = null;
    this.isSubmitted = false;
    this.submittedData = null;
  }
}

