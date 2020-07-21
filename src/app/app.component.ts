import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstname: string;
  lastname: string;
  title = 'tutorial1';


  submit(a, b ){
    console.log(a, b)
  }
}
