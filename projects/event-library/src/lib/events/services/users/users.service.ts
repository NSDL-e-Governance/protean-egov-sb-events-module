import { Injectable } from '@angular/core';
import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }

  getUser(userId) {

    const requestBody = {
      request: {
        "userId": userId
      }
    };

    const req = {
      url: this.userConfigService.getConfigUrl().usersApi,
      data: requestBody
    };

    return this.dataService.get(req);
  }
}
