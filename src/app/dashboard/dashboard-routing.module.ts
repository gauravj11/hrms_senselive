import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { ReportComponent } from './report/report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import {EmailExtractorComponent} from './email-extractor/email-extractor.component'

const routes: Routes = [
  { path: 'overview', component: DashboardComponent },
  { path: 'analysis', component:AnalysisComponent },
  { path: 'report', component:ReportComponent},
  { path: 'settings', component:SettingsComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'email', component:EmailExtractorComponent},
  { path: '', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
