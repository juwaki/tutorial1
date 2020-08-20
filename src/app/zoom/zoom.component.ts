import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  
  firstname: string;
  lastname: string;
  password: string;
  checkID: boolean;
  showInfo: boolean;


  zoomForm: FormGroup;
  title = 'tutorial1';
  info: any;



  constructor() {

    this.checkID = true;
   }

  ngOnInit() {

   // tslint:disable-next-line: no-unused-expression
   this.zoomForm = new FormGroup({
    input1: new FormControl('', [Validators.required, Validators.maxLength(10)] ),
    input2: new FormControl('', Validators.required),
    input3: new FormControl('', [Validators.required, Validators.email]),
    IDcontrol: new FormControl('', Validators.required),




   });
  }


   numbersOnly(value) {
    if (typeof (value) === 'number') {
        return value;
    }
}


  
  submit(){



    console.log('ID validated: ', this.info);
    if(this.info.isValid ===  false){

      this.checkID = false;


    }else {
      this.checkID = true;
      this.showInfo = true;

    }



    console.log(this.zoomForm.value);
  }

}
