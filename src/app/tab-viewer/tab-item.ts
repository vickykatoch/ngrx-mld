import { Component, Input } from '@angular/core';


@Component({
      selector : 'tab',
      template : `
            <div [hidden]="!active">
                  <ng-content></ng-content>
            </div>
      `
})
export class TabItemComponent {
      @Input() header: string;
      @Input() active : boolean = false;
      @Input() model : any;
}