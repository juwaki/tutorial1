import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ZoomComponent } from './zoom/zoom.component';
import { AppModule } from './app.module';
import { DownloadPdfComponent } from './download-pdf/download-pdf.component';


const routes: Routes = [

  {path: 'home', component: ZoomComponent},
  {path: 'download', component: DownloadPdfComponent},



];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
