import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reset.PasswordComponent } from './reset.password.component';

describe('Reset.PasswordComponent', () => {
  let component: Reset.PasswordComponent;
  let fixture: ComponentFixture<Reset.PasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reset.PasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reset.PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
