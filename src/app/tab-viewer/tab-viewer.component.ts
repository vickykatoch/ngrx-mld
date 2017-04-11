import { 
  Component, 
  Output, 
  Input,
  ContentChildren, 
  QueryList, 
  AfterContentInit, 
  AfterViewInit,
  EventEmitter, 
  ViewChild, 
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TabItemComponent } from "./tab-item";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import { TabMenuItem } from "app/tab-viewer/menu";
import * as _ from 'lodash';


enum DIRECTION {
  Left,
  Right
}

@Component({
  selector: 'tab-viewer',
  styleUrls: ['./tab-viewer.component.scss'],
  templateUrl : './tab-viewer.component.html'
})
export class TabViewerComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(TabItemComponent) tabs : QueryList<TabItemComponent>;
  @Output() tabClosed : EventEmitter<any> = new EventEmitter<any>();
  @Output() menuSelecetd  : EventEmitter<any> = new EventEmitter<any>();
  @Output() tabSelecetd  : EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('tabHost') tabHost : ElementRef;
  @Input() menuItems      : TabMenuItem[];
  isScrollerVisible : boolean = false;

  constructor() { }
  ngAfterViewInit() {
    let activeTabs = this.tabs.filter((tab)=>tab.active);
      if(activeTabs.length === 1) {
        const selectedDiv = this.tabHost.nativeElement.getElementsByClassName('selected');
        this.bringTabToView(selectedDiv[0]);
      } else {
        const handle = setTimeout(()=>{
            clearTimeout(handle);
            this.selectTab(undefined, this.tabs.first);
          });
      }

  }
  ngAfterContentInit() {
      // let activeTabs = this.tabs.filter((tab)=>tab.active);
      // if(activeTabs.length === 1) {
      //   const tab = activeTabs[0];
      //   const index = this.tabs.toArray().indexOf(tab);
      //   console.log(index);
      // } else {
      //   const handle = setTimeout(()=>{
      //       clearTimeout(handle);
      //       this.selectTab(undefined, this.tabs.first);
      //     });
      // }
  }


  selectTab(evt: any, tab: TabItemComponent) {
    if(this.isScrollerVisible && evt) {
      let elem : HTMLElement;
      if(evt.target instanceof HTMLDivElement) {
        elem = evt.target;
      } else if(evt.target.parentElement instanceof HTMLDivElement) {
        elem = evt.target;
      }
      if(elem) {
        this.bringTabToView(elem);
        this.tabSelecetd.next(tab.model);
      }
    } else {
      this.tabSelecetd.next(tab.model);
    }
  }
  closeTab(tab: TabItemComponent) : void {
    this.tabClosed.next(tab.model);
  }
  scrollLeft() {
    this.tabHost.nativeElement.scrollLeft-=50;
  }
  scrollRight() {
    this.tabHost.nativeElement.scrollLeft+=50;
  }
  scrollSlow(direction: string) {
    if(direction === 'left') {
      this.tabHost.nativeElement.scrollLeft-=5;
    } else {
      this.tabHost.nativeElement.scrollLeft+=5;
    }
      
  }
  onAdjustScroller() : void {
    const fixedWidth = +this.tabHost.nativeElement.clientWidth;
    const scrollableWidth = +this.tabHost.nativeElement.scrollWidth;
    this.isScrollerVisible = scrollableWidth > fixedWidth;
  }
  onMenuItemClicked(menuItem : TabMenuItem) : void {
    this.menuSelecetd.next(menuItem);
  }
  private bringTabToView(elem: any) {
        const left = elem.offsetLeft;
        const width = elem.offsetWidth;
        const expectedLeft = left+width;
        const displayWidth = this.tabHost.nativeElement.clientWidth;
        if(expectedLeft > displayWidth) {
          this.tabHost.nativeElement.scrollLeft=(expectedLeft - displayWidth);
        }
  }
}