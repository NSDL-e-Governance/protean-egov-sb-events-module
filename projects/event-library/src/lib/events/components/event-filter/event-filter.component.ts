// import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewEncapsulation,
  OnChanges
} from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash-es';

@Component({
  selector: 'sb-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EventFilterComponent implements OnInit, OnChanges {

  @Input() filterValues: any;
  @Input() filterLayout: any;
  @Input() filterOpenStatus: boolean;
  @Input() isOpen;
  @Input() isSorting :any ;
  @Input() filterConfig: any;
  @Output() filterChangeEvent = new EventEmitter();
  @Output() filterSearchData: EventEmitter<any> = new EventEmitter();
  @Output() sortingQuery = new EventEmitter();
  sortIcon = true;
  sortByOption: string;
  public searchFilterFormConfig: any;
  // @Input() filterConfig: any;
  // @Input() filterConfigv1: any;
  public isFilterShow = false;
  public filterFields: any;
  public currentFilters: any;
  public searchQuery: string;
  public filterSelectedValues = [];
  newLayout: any = 'horizontal-view';
 public sortingOptions=[{"field": "lastUpdatedOn",
 "name": "Modified On"}, {"field": "createdOn",
 "name": "Created On"}] ;
  constructor( /*public translate: TranslateService*/) {
  }

  ngOnChanges() {
    this.isFilterShow = this.filterOpenStatus;

    if (this.filterLayout == true) {
      this.newLayout = 'vertical-view';
    }
  }

  ngOnInit(): void {
    this.filterFields = this.filterConfig;
    this.checkForWindowSize();
  }

  initializeForm() { }

  showfilter() {
    this.isFilterShow = !this.isFilterShow;
    this.filterChangeEvent.emit({
      action: 'filterStatusChange',
      filterStatus: this.isFilterShow
    });
  }

  applySorting(sortByOption) {
    this.sortIcon = !this.sortIcon;
   
    this.sortingQuery.emit({
      action: 'SortEvents',
      filterStatus: [{'SortType': this.sortIcon,'sort_by':sortByOption}]
    });
    // this.queryParams['sortType'] = this.sortIcon ? 'desc' : 'asc';
    //  this.queryParams['sort_by'] = sortByOption;
    // this.route.navigate([this.redirectUrl], { queryParams: this.queryParams});
  }

  resetFilter() {
    this.filterSelectedValues=[];
    this.filterConfig=_.cloneDeep(this.filterFields);
    this.emitApplyFilter();
  }

  applyFilter() {
    this.emitApplyFilter();
  }

  emitApplyFilter() {
    this.filterChangeEvent.emit({
      action: 'filterDataChange',
      filter: this.filterValues,
      filtersSelected: this.filterSelectedValues,
      query: this.searchQuery
    });
  }

  outputData($event) { }

  onStatusChanges($event) { }

  valueChanges($event) {
    this.filterSelectedValues  = $event;
    this.emitApplyFilter();
  }

  onQueryEnter($event){
    $event.search = true;
    this.filterChangeEvent.emit($event);
  }

  private checkForWindowSize() {
    if (window.innerWidth <= 992) {
     this.isOpen = false;
    }
    else {
      this.isOpen = true;
    }

  }
}
