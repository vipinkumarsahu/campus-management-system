import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PchatComponent } from './pchat.component';

describe('PchatComponent', () => {
  let component: PchatComponent;
  let fixture: ComponentFixture<PchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
