import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { eventConfig } from './data';

const configMapper = {
  eventConfig: eventConfig
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventLibrary';
  public libEventConfig: any = configMapper['eventConfig'];

  constructor(
    // private translate:TranslateService
    ){
    // translate.addLangs(['en', 'nl']);
    // translate.setDefaultLang('en');
  }
}
