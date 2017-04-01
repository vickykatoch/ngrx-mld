import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewerTestComponent } from './tab-viewer-test.component';

describe('TabViewerTestComponent', () => {
  let component: TabViewerTestComponent;
  let fixture: ComponentFixture<TabViewerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabViewerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabViewerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
