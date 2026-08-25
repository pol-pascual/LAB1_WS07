import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  IonButtons,
  IonButton,
  IonBackButton
} from '@ionic/angular';
import { ReportService, ProgressReport } from '../services/report.service';
import { FeedbackComponent } from '../components/feedback/feedback.component';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.page.html',
  styleUrls: ['./report-detail.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButtons,
    IonButton,
    IonBackButton,
    FeedbackComponent
  ]
})
export class ReportDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private reportService = inject(ReportService);

  public report: ProgressReport | undefined;

  ngOnInit() {
    this.loadReport();
  }

  ionViewWillEnter() {
    this.loadReport();
  }

  loadReport() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.report = this.reportService.getReportById(id);
    }
  }

  goBack() {
    this.router.navigate(['/view']);
  }
}
