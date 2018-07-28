import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMemberComponent } from './non-member.component';

describe('NonMemberComponent', () => {
  let component: NonMemberComponent;
  let fixture: ComponentFixture<NonMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
