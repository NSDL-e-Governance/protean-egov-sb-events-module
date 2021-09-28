import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import{ labelMessages } from '../labels'

@Component({
  selector: 'lib-collection-icon',
  templateUrl: './event-icon.component.html',
  styleUrls: ['./event-icon.component.scss']
})

  export class EventIconComponent implements OnInit {  
  public showImagePicker = false;
  @Input() appIcon;
  @Input() appIconConfig;
  @Output() iconEmitter = new EventEmitter<any>();
  showImageUploadModal: boolean;
  labelMessages = labelMessages;

  constructor() { }

  ngOnInit() {
  }
  
  public initializeImagePicker()
  {
    if (this.appIconConfig.isAppIconEditable) {
      this.showImagePicker = true;
    }
    else {
      this.showImagePicker = false;
    }
  }

  collectionIconHandler(event) {
    this.iconEmitter.emit(event);
    this.appIcon = event.url;
    this.showImagePicker = false;
  }

  handleModalDismiss(event)
  {
    this.showImagePicker = false;
  }
}
