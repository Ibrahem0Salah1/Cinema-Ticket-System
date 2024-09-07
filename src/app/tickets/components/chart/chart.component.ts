import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  chart: any;
  ngOnInit(): void {
    this.chart = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          'ديسمبر',
          'نوفمبر',
          'أكتوبر',
          'سبتمبر',
          'أغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
        areaStyle: {
          color: 'rgba(116, 94, 198, 0.2)',
        },
        lineStyle: {
          color: '#8A74F9',
          width: 3,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false,
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          let value = params[0].value;
          let maxValue = 19230; // Calculated max value = 19,230
          let percentage = ((value / maxValue) * 100).toFixed(1); // Calculate percentage
          return `<div style="background: #1E1B39; color: #E5E5EF; padding: 0px; border-radius: 2px;">
                    استخدام ${value} <br/> <span style="color:#745ec6;">${percentage}%</span>
                  </div>`;
        },
        backgroundColor: '#1E1B39', // Background color for the tooltip
        textStyle: {
          color: '#E5E5EF', // Text color inside the tooltip
        },
      },
      series: [
        {
          data: [
            125, 190, 80, 155, 250, 180, 230, 190, 200, 140, 100, 230, 230,
          ],
          type: 'line',
          smooth: true,
          areaStyle: {
            color: 'rgba(116, 94, 198, 0.2)',
          },
          lineStyle: {
            color: '#8A74F9',
            width: 3,
          },
          symbolSize: 8,
          itemStyle: {
            color: '#745ec6',
          },
        },
      ],
      grid: {
        left: '3%',
        right: '3%',
        bottom: '2%',
        containLabel: true,
      },
    };
  }
}
