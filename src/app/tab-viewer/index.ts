import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewerComponent } from "./tab-viewer.component";
import { TabItemComponent } from './tab-item';


@NgModule({
      imports : [
            CommonModule
      ],
      declarations : [
            TabViewerComponent,
            TabItemComponent
      ],
      exports : [
            TabViewerComponent,
            TabItemComponent
      ]
})
export class TabViewerModule {

}
