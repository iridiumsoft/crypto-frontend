import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Master.MemberComponent } from './master.member.component';

describe('Master.MemberComponent', () => {
  let component: Master.MemberComponent;
  let fixture: ComponentFixture<Master.MemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Master.MemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Master.MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
