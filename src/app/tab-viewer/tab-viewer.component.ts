import { 
  Component, 
  Output, 
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
  @ViewChild('tabHost') tabHost : ElementRef;

  constructor() { }
  
  ngAfterContentInit() {
      let activeTabs = this.tabs.filter((tab)=>tab.active);
      if(activeTabs.length === 0 || activeTabs.length > 1) {
        const handle = setTimeout(()=>{
          clearTimeout(handle);
          this.selectTab(this.tabs.first);
        })
        
      }
  }
  selectTab(tab: TabItemComponent) {
      this.tabs.toArray().forEach(tab => tab.active = false);
      tab.active = true;
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
}

/*
template : `
    <div class="tab-viewer" #container>
          <ul #host>
            <li *ngFor="let tab of tabs" [class.selected]="tab.active" (click)="selectTab(tab)">
              <a href="#">
                <span [title]="tab.header">{{tab.header}}</span>
              </a>
              <span class="close-icon" (click)="closeTab(tab)">&times;</span>
            </li>
          </ul>
    </div>
    <section class="tab-viewer-content">
          <ng-content></ng-content>
    </section>
  `
  */