import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasterMemberComponent} from './master.member.component';

describe('Master.MemberComponent', () => {
    let component: MasterMemberComponent;
    let fixture: ComponentFixture<MasterMemberComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MasterMemberComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MasterMemberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
