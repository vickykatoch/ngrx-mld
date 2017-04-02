import { Component, Output, ContentChildren, QueryList, AfterContentInit, EventEmitter } from '@angular/core';
import { TabItemComponent } from "./tab-item";

@Component({
  selector: 'tab-viewer',
  styleUrls: ['./tab-viewer.component.scss'],
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
})
export class TabViewerComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent) tabs : QueryList<TabItemComponent>;
  @Output() tabClosed : EventEmitter<any> = new EventEmitter<any>();

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
}
