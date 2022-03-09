import { Injectable, Optional, Inject } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import * as urlConfig from './events/interfaces/urlConfig';

@Injectable({
  providedIn: 'root'
})
export class EventLibraryService {
  apiUrlConfig: any;
  // test: any;
  constructor(
    // private translate: TranslateService,
    @Inject("urlConfig") public libConfig: any) {
     if(libConfig != null){
        this.apiUrlConfig = libConfig;
      }  
 
    // translate.setDefaultLang('en');
  }
}
