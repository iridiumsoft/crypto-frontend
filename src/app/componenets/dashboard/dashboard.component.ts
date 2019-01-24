///<reference path="../../services/common.service.ts"/>
import {AfterViewChecked, Component, OnDestroy, OnInit} from "@angular/core";
import {HttpService} from "../../services/http.service";
import {CommonService} from "../../services/common.service";

declare const Highcharts: any;
declare const $: any;
declare const moment: any;
declare const swal: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewChecked, OnDestroy {

  selectedDate: Array<any> = [];
  portfolio: any = {};
  investedTotal: any = {};
  totalReturns: any = {};
  orders: any = [];
  ordersBitfinex: any = [];
  chart: any;
  loading = true;
  exchange = 'binance';
  graphBy = 'exchange';
  public total = 0;
  public pageSize = 10;
  public p = 0;
  portfolioType = 0;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {

    // Load JavaScript File
    CommonService.loadFile('https://code.highcharts.com/highcharts.js', () => {
      this.httpService.get('v1/orders/stats/' + this.graphBy).subscribe(res => {
        // Load chart
        this.initChart(res);
      });
    });

    // this.bitfinexHistory();
    this.bitfinexHistory();
    this.portfolioPerformance();
    this.GetChartValues();
  }

  ngAfterViewChecked() {
    this.DateRangePicker();
  }

  GetChartValues() {
    this.httpService.get('v1/orders/get-chart-values', {}).subscribe(res => {
      this.investedTotal = res.invested;
      this.totalReturns = res.totalReturns;
    });
  }

  bitfinexHistory() {
    this.httpService.get('v1/orders/bitfinex-history', {
      page: this.p,
      limit: this.pageSize,
    }).subscribe(res => {
      this.ordersBitfinex = res['orders_bitfinex'];
      this.total = res['total'];
    });
  }

  // getOrders() {
  //
  //   this.httpService.get('v1/orders/', {
  //     page: this.p,
  //     limit: this.pageSize,
  //   }).subscribe(res => {
  //     this.orders = res['orders'];
  //     this.total = res['total'];
  //     this.loading = false;
  //   });
  //
  // }

  portfolioPerformance() {
    this.httpService.get('v1/dashboard/portfolio-performance/' + this.portfolioType).subscribe(res => {
      this.portfolio = res;
    });

  }

  onPageChange(p) {
    this.p = p;
    this.bitfinexHistory();
  }

  initChart(data: any) {

    // Reverse the order
    data['months'] = data['months'].sort();
    data['polo'] = data['polo'].sort();
    data['binance'] = data['binance'].sort();

    this.chart = Highcharts.chart('chart', {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return data['months'][this.pos];
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 0,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'Binance',
        color: '#c0e6a9',
        data: data
      }]
    });

  }

  DateRangePicker() {
    const format = 'MM-DD-YYYY';
    // Load jQuery
    CommonService.loadFile([
      '/assets/js/jquery.js',
      '/assets/js/date-range-picker/moment.js',
      '/assets/js/date-range-picker/index.js',
      '/assets/js/date-range-picker/index.css'
    ], () => {
      const date = [moment().subtract(30, 'days').startOf('day'), moment().endOf('day')];
      this.selectedDate = [date[0].format(format), date[1].format(format)];
      this.changeGraphType(this.graphBy);
      $('.daterange').daterangepicker({
        buttonClasses: 'btn btn-sm btn-lg',
        maxDate: moment(),
        startDate: date[0],
        endDate: date[1],
        ranges: {
          'Today': [moment().startOf('day'), moment().endOf('day')],
          'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'day').endOf('day')],
          'Last 7 Days': [moment().subtract(7, 'days').startOf('day'), moment().endOf('day')],
          'Last 30 Days': date,
          'This Month': [moment().startOf('month').startOf('day'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month').startOf('day'), moment().subtract(1, 'month').endOf('month').endOf('day')],
        }
      }).on('apply.daterangepicker', (ev, picker) => {
        this.selectedDate = [picker.startDate.format(format), picker.endDate.format(format)];
        this.changeGraphType(this.graphBy);
      });
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }

  }

  changeGraphType(type) {
    // this.graphBy = type;
    // this.httpService.get('v1/dashboard/stats/' + this.exchange, {
    //     by: type || '',
    //     from: this.selectedDate[0],
    //     to: this.selectedDate[1],
    // }).subscribe(res => {
    //
    // }, err => {
    //
    // });
  }

  delete(item, index) {
    CommonService.loadFile('https://unpkg.com/sweetalert/dist/sweetalert.min.js');
    this.httpService.delete('v1/orders/' + item).subscribe(res => {
      this.ordersBitfinex.splice(index, 1);
      swal('Success', 'Deleted Successfully', 'success');
    }, err => {
      swal('Oops!', err.error, 'error');
    });
  }

}
