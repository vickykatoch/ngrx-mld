import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from './employee';
import { TabMenuItem } from "app/tab-viewer/menu";

enum MenuIdentifier {
  center=0,
  settings,
  searchInstrument
}

@Component({
  selector: 'tab-viewer-test',
  templateUrl: './tab-viewer-test.component.html',
  styleUrls: ['./tab-viewer-test.component.scss']
})
export class TabViewerTestComponent implements OnInit {
  menuItems : TabMenuItem[] = [];

  employees : Employee[] = [];
  constructor() { 
    this.employees = [
      {
        id: 1,
        name : 'Balwinder Katoch'
      },
      {
        id: 2,
        name : 'Anand Rao'
      },
      {
        id: 3,
        name : 'Aniruddh Singh'
      },
      {
        id: 4,
        name : 'Mrundang Mazumdar'
      },{
        id: 5,
        name : 'Sundar Nalli'
      },{
        id: 6,
        name : 'Nirmal Patel'
      },{
        id: 7,
        name : 'Amit Kaistha'
      }

    ];
    this.buildMenus();
  }

  ngOnInit() {
  }

  onTabClosed(rowObject: Employee) : void {
    this.employees = this.employees.filter(e=> e.id!==rowObject.id);
    console.log(rowObject);
  }
  private buildMenus() {
    this.menuItems.push({
      id: MenuIdentifier.center,
      label : 'Center',
      iconClass:'fa-bullseye'
    });
    this.menuItems.push({
      id: MenuIdentifier.center,
      label : 'Settings...',
      iconClass:'fa-sliders'
    });
    this.menuItems.push({
      id: MenuIdentifier.center,
      label : 'Search Instrument(s)...',
      iconClass:'fa-search-plus'
    });
  }
}
