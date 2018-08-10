import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeHistoryComponent} from './trade.history.component';
import {HttpService} from "../../services/http.service";

describe('TradeHistoryComponent', () => {
    let component: TradeHistoryComponent;
    let fixture: ComponentFixture<TradeHistoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [HttpService],
            declarations: [TradeHistoryComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TradeHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
