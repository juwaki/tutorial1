import { Component, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';
import * as jsPDF from 'jspdf';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.css']
})
export class DownloadPdfComponent implements OnInit {

  name: string;
  surname: string;
  loader = false;
  taskName: string;
  constructor(private router: Router, private taskservice: taskservice ) { }

  ngOnInit() {
    this.getNames();

    this.getTaskName();

  }




  getTaskName(){

    // ask url end point for getting tasks for each user ''

    // create a method to get tasks, inside your task service

    // comoponent and assign task name

    this.taskservice.getstatus()
    .subscribe((data)=>{
      console.log(data);
      this.taskName = data.task.name;
    })

  }










  getNames(){
    this.name ="Juwaki";
    this.surname = "Ledwaba";
  }

  download() {

    var node = document.getElementById('parentdiv');

    var img;
    var filename;
    var newImage;


    domtoimage.toPng(node, { bgcolor: '#fff' })

      .then((dataUrl) => {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;
        img.onload = function () {

          var pdfWidth = img.width;
          var pdfHeight = img.height;

          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

          var doc;

          if (pdfWidth > pdfHeight) {
            doc = new jsPDF.default('l', 'px', [pdfWidth, pdfHeight]);
          }
          else {
            doc = new jsPDF.default('p', 'px', [pdfWidth, pdfHeight]);
          }


          let width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG', 10, 10, width, height);
          filename = 'timesheet' + '.pdf';
          doc.save(filename);

          

        };


        setTimeout(() => {
        
          this.router.navigateByUrl('/home');

          this.loader = false;
        }, 3000);


        this.loader = true;
    
        

      })
      .catch(function (error) {

        // Error Handling

      });

  }

}
