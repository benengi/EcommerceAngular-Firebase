import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertasComponent } from './huertas.component';

describe('HuertasComponent', () => {
  let component: HuertasComponent;
  let fixture: ComponentFixture<HuertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
