import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../../projects/event-library/src/lib/events/services/event/event.service';
import { UsersService } from './../../../projects/event-library/src/lib/events/services/users/users.service';
import { EventDetailService } from './../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';

@Component({
  selector: 'app-enroll-users',
  templateUrl: './enroll-users.component.html',
  styleUrls: ['./enroll-users.component.scss']
})
export class EnrollUsersComponent implements OnInit {

  // eventIdentifier = "do_11322166143296307218"
  enrollData: any;
  queryParams:any;
  userData: any;
  attendanceList: any;
  eventUserEnrollData: any;
  eventItem: any;

  isLoading: boolean =  true;
  tab :string= "list";
  p: number = 1;

  constructor(
    private route: ActivatedRoute, 
    private eventService: EventService, 
    private router: Router, 
    private usersService: UsersService,
    private eventDetailService: EventDetailService
  ) { }

  ngOnInit() {
    // Get the url (query) params
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });

    // Subsribe to the event detail service and get single event data
    this.eventDetailService.getEvent(this.queryParams.identifier)
        .subscribe((data: any) => {
          this.eventItem = data.result.event;
          this.isLoading = false;
          console.log('Event Dash bord - ', this.eventItem);
    },(err: any) => {
      console.log('err = ', err);
    });

    // this.getEnrollEventUsersList();
    this.getAttendanceDetails();
  }

  /** Get EventDetails */
  // getEventDetails(){
  //    // Subsribe to the event detail service and get single event data
  //   this.eventDetailService.getEvent(this.queryParams.identifier)
  //       .subscribe((data: any) => {
  //         this.eventData = data.result.event;
  //         this.isLoading = false;
  //         console.log('Event Detail - ', this.eventData);
  //       },(err: any) => {
  //         console.log('err = ', err);
  //       });
  // }

  getAttendanceDetails()
  {
    this.eventService.getAttendanceList(this.queryParams.identifier,this.queryParams.batchid).subscribe((data) => {
      // console.log(data.result.response.content);
      this.attendanceList = data.result.response.content;
      // this.eventService.convertDate(event.enrolledDate);
      this.getEnrollEventUsersData(this.attendanceList);
    });
  }

  getEnrollEventUsersData(list){
    this.attendanceList.forEach(item => {
      // console.log("getAttendanceList Details : ", item);
      this.eventService.convertDate(item.enrolledDate);
    });

    this.eventUserEnrollData = this.attendanceList;

    // console.log("eventUserEnrollData Details : ", this.eventUserEnrollData);

  }
  
/**
 * Get list of Batch
 */
  // getBatchId(){
  //   // filter set for serch batch for selected event
  //   let filters ={
  //   "courseId": this.queryParams.identifier,
  //   "enrollmentType": "open"
  //   };

  //   this.eventService.getBatches(filters).subscribe((res) => {

  //     let batchDetails = res.result.response.content[0];
  //     console.log('Batch Details :: ', batchDetails);

  //     this.eventService.getParticipantsList(batchDetails.batchId).subscribe((data) => {

  //       console.log('Participants List :: ', data.result.batch.participants);

  //       // filter set for serch batch for selected event
  //       let filters ={
  //           "userId": data.result.batch.participants
  //       };

  //       this.usersService.getUser(filters).subscribe((result) => {
  //           this.participantsList = result.result.response.content;
  //       });

  //       // this.getEnrolledUserInfo();
  //     });
  //   });
  // }

/**
 * Get list of enrollment data of selected event
 */
  /*getEnrollEventUsersList(){
    this.eventService.getEnrollEvents(this.queryParams.identifier, '').subscribe((data) => {
      this.enrollData = data.result.events;
      console.log('Enroll :: ', data.result);
      //this.getEnrolledUserInfo(data.result.courses);
      this.getEnrolledUserInfo();
    });
  }*/

/**
 * Get list of User data of selected event
 */
  //getEnrolledUserInfo(events)
  // getEnrolledUserInfo()
  // {
  //     // this.participantsList.forEach(user => {
      //   console.log("User Details : ", user);
      // });


    // this.enrollData.forEach(event => {
      
    //events.forEach(event => {
      // this.usersService.getUser(event.userId).subscribe((data) => {
      //    this.userData = data.result.response.filter((item) => item.id === event.userId);
      //    event.userFname = this.userData[0].firstname;
      //    event.userLname = this.userData[0].lastname;
      //    event.userEmail = this.userData[0].email;
      //    event.userAttendantStatus = event.status == 2 ? "Present" : "Absent";
      // });

      // this.convert(event.enrolledDate);
    // });

    
    // this.eventUserEnrollData = this.enrollData;
  // }

  convert(event) {
    var date = new Date(event),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    
    var datestr = [date.getFullYear(), mnth, day].join("/");

    return datestr;
  }
  
  Openview(view)
  {
    this.isLoading = true;

    if(view == 'list' )
    {
      this.router.navigate(['/demo'], { });
    }
    else if(view == 'detail')
    {
      this.tab = 'detail';
    }
    else if (view == 'enrollUsersList')
    {
      this.router.navigate(['/enroll-users'], {
        queryParams: {
          identifier: this.queryParams.identifier
        }
      });
    }
    else
    {
      this.router.navigate(['/form'], {
        queryParams: {
          // identifier: event.identifier
        }
      });
    }

    this.isLoading = false;
  }
}
