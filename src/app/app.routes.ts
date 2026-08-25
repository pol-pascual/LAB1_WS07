import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'view',
    loadComponent: () => import('./view/view.page').then((m) => m.ViewPage),
  },
  {
    path: 'report-detail/:id',
    loadComponent: () => import('./report-detail/report-detail.page').then((m) => m.ReportDetailPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
