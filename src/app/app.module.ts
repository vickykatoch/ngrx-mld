import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabViewerModule } from './tab-viewer';
import { TabViewerTestComponent } from './tab-viewer-test/tab-viewer-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TabViewerTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
