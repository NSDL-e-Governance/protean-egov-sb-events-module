import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../../projects/event-library/src/lib/events/services/event/event.service';
import { UsersService } from './../../../projects/event-library/src/lib/events/services/users/users.service';

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
  eventUserEnrollData: any;

  isLoading: boolean =  true;
  tab :string= "list";
  paginateCount: number = 1;
  eventId: any;
  users:any;
  arrayEnrollUsers: any = [];

  constructor(
    private route: ActivatedRoute, 
    private eventService: EventService, 
    private router: Router, 
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    // Get the url (query) params
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });

    this.eventId = this.queryParams.identifier;

    // Get all enroll data of single event
    this.getEventEnrollments();
  }

/**
 * Get list of enrollment data of selected event
 */
  getEventEnrollments(){
    this.eventService.getEnrollEvents(this.eventId, '').subscribe((data) => {
      this.enrollData = data.result.content;
      
      // Get list of User data of selected event
      this.getEnrolledUsers();
    });
  }

/**
 * Get list of User data of selected event
 */
  getEnrolledUsers()
  {
    this.enrollData.forEach(event => {     
      this.arrayEnrollUsers.push(event.userId);
    });

    // Get user list of data
    this.getUsers(this.arrayEnrollUsers);
  }

/**
 * Get user list of data
 */
  getUsers(userIds)
  {
      this.usersService.getUsers(userIds).subscribe((data) => {
        this.users = data.result.response;
       
        this.getEnrollEventUsersData(this.users);
      });
  }

/**
 * Get enroll event user list of data
 */
  getEnrollEventUsersData(users)
  {
    this.enrollData.forEach(event => {
      users.forEach(user => {
           if (user.identifier == event.userId)
           {
              event.userFname = user.firstname;
              event.userLname = user.lastname;
              event.userEmail = user.email;
              // event.userAttendantStatus = event.status == 2 ? "Present" : "Absent";

              this.convert(event.enrolledDate);
           }
      });
    });

    this.eventUserEnrollData = this.enrollData;
  }

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
