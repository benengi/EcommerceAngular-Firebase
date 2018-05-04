import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LalatinaComponent } from './lalatina.component';

describe('LalatinaComponent', () => {
  let component: LalatinaComponent;
  let fixture: ComponentFixture<LalatinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LalatinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LalatinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
