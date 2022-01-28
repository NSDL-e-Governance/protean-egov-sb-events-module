import { Injectable } from '@angular/core';
import { IEventConfig } from '../../interfaces/event-config';


@Injectable({
  providedIn: 'root'
})
export class LibEventService {
  private _eventConfig: IEventConfig;

  constructor() { }

  public initialize(config: IEventConfig) {
   
    this._eventConfig = config;

    // if (this.configService.editorConfig && this.configService.editorConfig.default) 
    // {
    //   this._eventConfig.config = _.assign(this.configService.editorConfig.default, this._eventConfig.config);
    // }
    // this._editorMode = _.get(this._eventConfig, 'config.mode').toLowerCase();
  }

  public get eventConfig(): IEventConfig {
    return this._eventConfig;
  }

}
