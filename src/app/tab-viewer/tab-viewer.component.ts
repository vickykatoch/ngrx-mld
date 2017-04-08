import { 
  Component, 
  Output, 
  Input,
  ContentChildren, 
  QueryList, 
  AfterContentInit, 
  EventEmitter, 
  ViewChild, 
  ElementRef
} from '@angular/core';
import { TabItemComponent } from "./tab-item";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import { TabMenuItem } from "app/tab-viewer/menu";

enum DIRECTION {
  Left,
  Right
}

@Component({
  selector: 'tab-viewer',
  styleUrls: ['./tab-viewer.component.scss'],
  templateUrl : './tab-viewer.component.html'
})
export class TabViewerComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent) tabs : QueryList<TabItemComponent>;
  @Output() tabClosed : EventEmitter<any> = new EventEmitter<any>();
  @Output() menuSelecetd  : EventEmitter<any> = new EventEmitter<any>();
  @Output() tabSelecetd  : EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('tabHost') tabHost : ElementRef;
  @Input() menuItems      : TabMenuItem[];
  isScrollerVisible : boolean = false;

  constructor() { }
  
  ngAfterContentInit() {
      let activeTabs = this.tabs.filter((tab)=>tab.active);
      if(activeTabs.length === 0 || activeTabs.length > 1) {
          const handle = setTimeout(()=>{
            clearTimeout(handle);
            this.selectTab(this.tabs.first);
          });        
      }
  }
  selectTab(tab: TabItemComponent) {
    this.tabSelecetd.next(tab.model);
      // this.tabs.toArray().forEach(tab => tab.active = false);
      // tab.active = true;
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
}