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

  remarks: string = '';
  selectedFileName: string = '';

  isSubmitted: boolean = false;
  submittedData: any = null;

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
  }

  resetForm() {
    this.selectedLearner = '';
    this.selectedReportType = '';
    this.score = null;
    this.remarks = '';
    this.selectedFileName = '';
    this.isSubmitted = false;
    this.submittedData = null;
  }
}


