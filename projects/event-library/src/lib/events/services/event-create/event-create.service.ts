// import { Injectable } from '@angular/core';
// <<<<<<< HEAD
// import { HttpClient, HttpResponse } from '@angular/common/http';
// =======
// >>>>>>> upstream/main
// import { SbToastService } from '../../services/iziToast/izitoast.service';
// import { UserConfigService } from '../userConfig/user-config.service';
// import { DataService } from '../data-request/data-request.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventCreateService {

//   constructor(
// <<<<<<< HEAD
//     private http: HttpClient,
// =======
// >>>>>>> upstream/main
//     private userConfigService: UserConfigService,
//     private dataService: DataService,
//     private sbToastService: SbToastService) {
//   }

//   /**
//    * For get event form config 
//    */
//   getEventFormConfig() {
//     const req = {
//       url: this.userConfigService.getConfigUrl().eventFormConfigApi
//     };
//     return this.dataService.get(req);
//   }
// <<<<<<< HEAD

//   /**
//  * For post event data
//  */
//   saveEvent(formData) {
//     const requestBody = {
//       request: {
//         content: {
//           formData
//         }
// =======

// /**
//  * For post event data
//  */
//   createEvent(formData) {
   
//     const requestBody = {
//       request: {
//         event: formData
//       }
//     };

//     const option = {
//        url: this.userConfigService.getConfigUrl().create,
//       data: requestBody,
//       header: { 'Content-Type' : 'application/json'}
//     };

//     return this.dataService.post(option);
//   }


//   updateEvent(formData) {
   
//     const requestBody = {
//       request: {
//         event: formData
// >>>>>>> upstream/main
//       }
//     };

//     const option = {
// <<<<<<< HEAD
//       // url: ``,
//       data: requestBody
//     };
//     if(formData.identifier){
//       //update post call
//     }
//     else{
//       // create post call
//     }
//     // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
//   }

//   /**
//  * For post event data
//  */
//   createEvent(formData) {
//     const requestBody = {
//       "name":"sd",
//       "salary":"12",
//       "age":"23"
//     };

//     const requestBody1 = {
//       request: {
//         content: {
//           formData
//         }
//       }
//     };

//     const option = {
//        url: this.userConfigService.getConfigUrl().eventCreateApi,
//       data: requestBody,
//       header: { 'Access-Control-Allow-Origin' : '*'}
//     };

//     this.dataService.post(option).subscribe((data)=>{
//     });

//     this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
//   }

// =======
//        url: this.userConfigService.getConfigUrl().update + "/" + formData['identifier'],
//       data: requestBody,
//       header: { 'Content-Type' : 'application/json'}
//     };

//     return this.dataService.patch(option);
//   }

//   /**
//    * For publish event
//    */
//    publishEvent(identifier){

//     const option = {
//       url: this.userConfigService.getConfigUrl().publish + "/" + identifier,
//      header: { 'Content-Type' : 'application/json'}
//    };

//    return this.dataService.post(option);

//    }
// >>>>>>> upstream/main
// }
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
    
    // .subscribe((data)=>{
      
    //   console.log({data});
    // });

    this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
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
    return this.dataService.post(option);
    // return this.dataService.patch(option);

   // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
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
