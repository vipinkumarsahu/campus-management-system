import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresultComponent } from './presult.component';

describe('PresultComponent', () => {
  let component: PresultComponent;
  let fixture: ComponentFixture<PresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
