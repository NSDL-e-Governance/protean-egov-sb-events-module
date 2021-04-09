import { Injectable } from '@angular/core';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService,
    private sbToastService: SbToastService) {
  }

  /**
   * For get event form config 
   */
  getEventFormConfig() {
    const req = {
      url: this.userConfigService.getConfigUrl().eventFormConfigApi
    };
    return this.dataService.get(req);
  }

/**
 * For post event data
 */
  createEvent(formData) {
   
    const requestBody = {
      request: {
        event: formData
      }
    };

    const option = {
       url: this.userConfigService.getConfigUrl().create,
      data: requestBody,
      header: { 'Content-Type' : 'application/json'}
    };

    return this.dataService.post(option);
  }


  updateEvent(formData) {
   
    const requestBody = {
      request: {
        event: formData
      }
    };

    const option = {
       url: this.userConfigService.getConfigUrl().update + "/" + formData['identifier'],
      data: requestBody,
      header: { 'Content-Type' : 'application/json'}
    };

    return this.dataService.patch(option);
  }

  /**
   * For publish event
   */
   publishEvent(identifier){

    const option = {
      url: this.userConfigService.getConfigUrl().publish + "/" + identifier,
     header: { 'Content-Type' : 'application/json'}
   };

   return this.dataService.post(option);

   }
}
