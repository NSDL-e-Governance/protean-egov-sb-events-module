import { Injectable } from '@angular/core';
import { EventLibraryService } from '../../../event-library.service';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  userId: string;
 
  constructor(
    private eventLibraryService: EventLibraryService
    ) 
    {
  }
  getConfigUrl() {
    // console.log("this.eventLibraryService.apiUrlConfig",this.eventLibraryService.apiUrlConfig);
    return this.eventLibraryService.apiUrlConfig;
  }

}
