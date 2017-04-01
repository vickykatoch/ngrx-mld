import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'tab-viewer-test',
  templateUrl: './tab-viewer-test.component.html',
  styleUrls: ['./tab-viewer-test.component.scss']
})
export class TabViewerTestComponent implements OnInit {
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
      }

    ];
  }

  ngOnInit() {
  }

  onTabClosed(rowObject: Employee) : void {
    this.employees = this.employees.filter(e=> e.id!==rowObject.id);
    console.log(rowObject);
  }
}
