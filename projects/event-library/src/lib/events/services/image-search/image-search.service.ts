import { Injectable } from '@angular/core';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
import * as _ from 'lodash-es';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }

    /**
   * For get event detail 
   */
     getEditMode()
     {
      const req = {
        url: this.userConfigService.getConfigUrl().EditModeApi
      };
  
      return this.dataService.get(req);
    }

    getMyImages(request)
    {
      const reqParam = {
        url: this.userConfigService.getConfigUrl().ImageSearchApi,
        data: {
          request: {
            filters: {
              contentType: 'Asset',
              compatibilityLevel: {
                min: 1,
                max: 2
              },
              status: ['Live'],
            },
            limit: 50,
          }
        }
      };
      reqParam.data.request = request ? _.merge({}, reqParam.data.request, request) : reqParam;
      return this.dataService.get(reqParam);
    }

    createMediaAsset(req?: object) {
      const reqParam = {
        url: _.get(this.userConfigService.getConfigUrl(), 'createImage'),
        data: {
          request: {
            content: {
              contentType: 'Asset',
              language: ['English'],
              code: UUID.UUID(),
            }
          }
        },
        header: { 'Content-Type' : 'application/json','Authorization': ''},
      };
      reqParam.data.request = req ? _.merge({}, reqParam.data.request, req) : reqParam;
      return this.dataService.post(reqParam);
    }
  
    uploadMedia(req, assetId: any) {
      let reqParam = {
        url: this.userConfigService.getConfigUrl().uploadImage + "/" + assetId,
        data: req.data,
        header: {},
      };
      
      reqParam = req ? _.merge({}, reqParam, req) : reqParam;
      return this.dataService.post(reqParam);
    }

    getAssetMedia(req?: object) {
      const reqParam = {
        url: this.userConfigService.getConfigUrl().compositeSearch,
        data: {
          request: {
            filters: {
              contentType: 'Asset',
              compatibilityLevel: {
                min: 1,
                max: 2
              },
              status: ['Live'],
            },
            limit: 50,
          }
        }
      };
      reqParam.data.request = req ? _.merge({}, reqParam.data.request, req) : reqParam;
      return this.dataService.post(reqParam);
    }
}
