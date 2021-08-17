import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventLibrary';
  constructor(private translate:TranslateService){
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }
}
