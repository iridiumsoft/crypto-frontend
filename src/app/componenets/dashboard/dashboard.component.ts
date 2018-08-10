import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {CommonService} from "../../services/common.service";

declare const Highcharts: any;
declare const $: any;
declare const moment: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

    orders: any = [];
    graphBy = 'exchange';
    selectedDate: Array<any> = [];
    chart: any;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {

        // Load JavaScript File
        CommonService.loadFile('https://code.highcharts.com/highcharts.js', () => {
            this.httpService.get('v1/orders/stats/' + this.graphBy).subscribe(res => {
                // Load chart
                this.initChart(res);
            }, err => {

            })
        });

        this.httpService.get('v1/orders/history').subscribe(res => {
            this.orders = res;
        }, err => {

        });

        this.DateRangePicker();
    }

    initChart(data: any) {
        console.log(data);
        this.chart = Highcharts.chart('chart', {
            chart: {
                type: 'area'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
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
                data: [
                    null, null, null, null, null, 6, 11, 32, 110, 235,
                    369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                    20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                    26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                    21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                    10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                    5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
                ]
            }, {
                name: 'Poloneix',
                color: '#387de6',
                data: [null, null, null, null, null, null, null, null, null, null,
                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                    1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                    11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                    30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                    37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                    21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                    12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
                ]
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
            this.selectedDate = date;
            $('.daterange').daterangepicker({
                buttonClasses: 'btn btn-sm btn-lg',
                maxDate: moment(),
                startDate: date[0],
                endDate: date[1],
                ranges: {
                    'Today': [moment().startOf('day'), moment().endOf('day')],
                    'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'day').endOf('day')],
                    'Last 7 Days': [moment().subtract(7, 'days').startOf('day'), moment().endOf('day')],
                    'Last 30 Days': [moment().subtract(30, 'days').startOf('day'), moment().endOf('day')],
                    'This Month': [moment().startOf('month').startOf('day'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month').startOf('day'), moment().subtract(1, 'month').endOf('month').endOf('day')],
                    'All': [moment(new Date('01/01/2012')).startOf('day'), moment().endOf('day')]
                }
            }).on('apply.daterangepicker', (ev, picker) => {
                this.selectedDate = [picker.startDate.format(format), picker.endDate.format(format)];
            });
        });
    }

    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }

    }

    changeGraphType(type) {
        this.graphBy = type;
    }


}
