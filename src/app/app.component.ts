import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventLibrary';
  constructor(private router : Router){

  }
  openHome(){
  // this.router.navigate(['/home']);
  }
}
