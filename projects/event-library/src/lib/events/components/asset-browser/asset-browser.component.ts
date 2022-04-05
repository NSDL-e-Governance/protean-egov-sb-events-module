import { Component, OnInit, Input, OnDestroy,Output,EventEmitter, ViewChild } from '@angular/core';
import { ImageSearchService } from '../../services/image-search/image-search.service';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import {configs} from './asset-browser.data';
import * as _ from 'lodash-es';
import { LibEventService } from '../../services/lib-event/lib-event.service';

@Component({
  selector: 'lib-asset-browser',
  templateUrl: './asset-browser.component.html',
  styleUrls: ['./asset-browser.component.css']
})
export class AssetBrowserComponent implements OnInit, OnDestroy {
 // @ViewChild('modal') modal;
  @ViewChild('modal', {static: false}) modal;
  @Input() showImagePicker;
  @Output() assetBrowserEmitter = new EventEmitter<any>();
  @Output() modalDismissEmitter = new EventEmitter<any>();
  @Input() UsarConfig : any;
  showImageUploadModal: boolean;
  userId: any; //userId by ankita
  eventConfig: any;
  isClosable = true;
  myImages =[];
  // myImage =[];
  appIcon;
  public assetsCount: any;
  public searchMyInput = '';
  public searchAllInput: any;
  myAssets = [];
  allImages = [];
  query: string;
  public formData: any;
  public assestData = {};
  public formConfig: any;
  public assetName: any;
  showErrorMsg: boolean;
  assetConfig: any = {};
  errorMsg: string;
  public imageUploadLoader = false;
  acceptImageType: any;
  public initialFormConfig: any;
  public imageFormValid: any;
  public emptySearchMessage: any;
  constructor(
    private imageSearchService : ImageSearchService,
    private sbToastService: SbToastService,
    private libEventService: LibEventService
    ) { }



  ngOnInit() {
    this.initialFormConfig =  _.get(configs, 'uploadIconFormConfig');
    // this.formConfig =  _.get(configs, 'uploadIconFormConfig');
    this.acceptImageType = "image/png,image/jpeg";
    this.eventConfig = this.UsarConfig;
    this.userId=this.UsarConfig.user.id;   
  }
  ngOnDestroy() {
  }

  getMyImages(offset, query?, search?) {
    this.assetsCount = 0;
    if (!search) {
      this.searchMyInput = '';
    }
    if (offset === 0) {
      this.myAssets.length = 0;
    }
    const req = {
      filters: {
        mediaType: ['image'],
        createdBy: this.userId
      },
      offset
    };
    if (query) {
      req['query'] = query;
    }
    console.log("1111req",req);
    
    this.imageSearchService.getAssetMedia(req).subscribe((data) => {
      if (data.responseCode == "OK")
      {
        // this.myImage = data.result.content;
        this.assetsCount = data.result.count;
        _.map(data.result.content, (item) => {
          if (item.downloadUrl) {
            this.myImages.push(item);
            console.log("1111",item);
          }
        });
      }
    }, (err) => {
      console.log({ err });
      // this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
    });
  }

  addImageInEditor(imageUrl, imageId) {
    this.appIcon = imageUrl;
    this.showImagePicker = false;
    this.assetBrowserEmitter.emit({type: 'image', url: this.appIcon});
    this.dismissImagePicker();
    this.modal.deny();
  }

  getAllImages(offset, query?, search?) {
  
    this.assetsCount = 0;
    if (!search) {
      this.searchAllInput = '';
    }
    if (offset === 0) {
      this.allImages.length = 0;
    }
    const req = {
      filters: {
        mediaType: ['image']
      },
      offset
    };
    if (query) {
      req['query'] = query;
    }
    this.imageSearchService.getAssetMedia(req).subscribe((data) => {
      if (data.responseCode == "OK")
      {
        this.assetsCount = data.result.count;
        _.map(data.result.content, (item) => {
          if (item.downloadUrl) {
            this.allImages.push(item);
          }
        });
        // this.allImages = data.result.content;
        
      }
    }, (err) => {
      console.log({ err });
      // this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
    });
  }  


  lazyloadMyImages() {
    const offset = this.myImages.length;
    this.getMyImages(offset, this.query, true);
  }

  lazyloadAllImages() {
  const offset = this.allImages.length;
  this.getAllImages(offset, this.query, true);
}

uploadImage(event)
{
  const file = event.target.files[0];
  const reader = new FileReader();
  this.formData = new FormData();
  this.formData.append('file', file);
  this.assetName = file.name;
  const fileType = file.type;
  const fileName = file.name.split('.').slice(0, -1).join('.');
  const fileSize = file.size / 1024 / 1024;
  if (fileType.split('/')[0] === 'image')
  {
    this.showErrorMsg = false;
    if (fileSize > 1)
    {
      this.showErrorMsg = true;
      this.errorMsg = 'upload image of minimun size 1MB'
      this.errorMsg = "Error";
     //this.assetConfig.image.size + this.assetConfig.image.sizeType;
      this.resetFormData();
    }
    else {
      this.errorMsg = '';
      this.showErrorMsg = false;
      reader.readAsDataURL(file);
    }
  }
  else 
  {
    this.showErrorMsg = true;
    this.errorMsg=''
  //  this.errorMsg = _.get(this.configService.labelConfig, 'messages.error.020');
  }

  if (!this.showErrorMsg)
  {
    this.imageUploadLoader = true;
    this.imageFormValid = true;
    this.assestData = this.generateAssetCreateRequest(fileName, fileType, 'image');
    this.populateFormData(this.assestData);
  }
}

resetFormData() {
  this.imageUploadLoader = false;
  this.imageFormValid = false;
  this.formConfig = this.initialFormConfig;
}

populateFormData(formData) {
  const formvalue = _.cloneDeep(this.formConfig);
  this.formConfig = null;
  _.forEach(formvalue, (formFieldCategory) => {
      formFieldCategory.default = formData[formFieldCategory.code];
      formFieldCategory.editable = true;
  });
  this.formConfig = formvalue;
}

uploadAndUseImage(modal) {
  this.imageSearchService.createMediaAsset({ content: this.assestData }).subscribe((res) => {
   const imgId = res.result.node_id;
    const request = {
      data: this.formData
    };

    this.imageSearchService.uploadMedia(request, imgId).subscribe((response) => {
      this.addImageInEditor(response.result.content_url, response.result.node_id);
      this.showImageUploadModal = false;
      this.dismissPops(modal);
    },
    (err) => {
      console.log({ err });
      // this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
    });
  });
}

generateAssetCreateRequest(fileName, fileType, mediaType) {
  return {
      name: fileName,
      mediaType,
      mimeType: fileType,
      createdBy: this.userId,
      creator: this.UsarConfig.user.firstName,
      channel: this.UsarConfig.user.channel
  };
}

dismissImageUploadModal() {
  this.showImagePicker = true;
  this.showImageUploadModal = false;
}

openImageUploadModal() {
  this.showImageUploadModal = true;
  this.formData = null;
  this.formConfig = this.initialFormConfig;
  this.imageUploadLoader = false;
  this.imageFormValid = false;
  this.showErrorMsg = false;
}

dismissPops(modal) {
  this.dismissImagePicker();
  modal.deny();
}

dismissImagePicker() {
  this.showImagePicker = false;
  this.modalDismissEmitter.emit({})
}


  searchImages(event, type)
  {
    if (event === 'clearInput' && type === 'myImages') {
      this.query = '';
      this.searchMyInput = '';
      console.log("....",event,"....", type,"....",this.query);
    } else if (event === 'clearInput' && type === 'allImages') {
      this.query = '';
      this.searchAllInput = '';
      console.log("....",event,"....", type,"....",this.query);

    } else {
      this.query = event.target.value;
      console.log("....",event,"....", type,"....",this.query);

    }
    if (type === 'myImages' ) {
        this.getMyImages(0, this.query, true);
      console.log("....",event,"....", type,"....",this.query);

    } else {
        this.getAllImages(0, this.query, true);
      console.log("....",event,"....", type,"....",this.query);

    }
  }

  onStatusChanges(event) {
    if (event.isValid && this.imageUploadLoader) {
      this.imageFormValid = true;
    } else {
      this.imageFormValid = false;
    }
  }

  valueChanges(event) {
    this.assestData = _.merge({}, this.assestData, event);
  }



}
