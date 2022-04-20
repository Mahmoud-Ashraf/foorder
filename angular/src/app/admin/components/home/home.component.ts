import { ResturantsService } from './../../../shared/services/resturants.service';
import { AuthService } from './../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  now = new Date();
  private userListnerSub: Subscription;
  loggedUser: any;
  resturants: any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartType: ChartType = 'bar';
  public barChartData = {
    // labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [
          { name: 'Hamada Sheraton', vote: 5 },
          { name: 'Bashandy', vote: 3 },
          { name: 'Anas Al Demashqy', vote: 2 },

        ]
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // // We use these empty structures as placeholders for dynamic theming.
    // scales: {
    //   x: {},
    //   y: {
    //     min: 10
    //   }
    // },
    // plugins: {
    //   legend: {
    //     display: true,
    //   },
    // },
    parsing: {
      xAxisKey: 'name',
      yAxisKey: 'vote',
    }
  };
  constructor(
    private authService: AuthService,
    private resturantsService: ResturantsService
  ) { }

  // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.userListnerSub = this.authService
      .getAuthUserListner()
      .subscribe((user: any) => {
        this.loggedUser = user;
        // console.log('loggedUser: ', this.loggedUser);
      });
    this.resturantsService.getResturants().subscribe((resturantsRes: any) => {
      this.resturants = resturantsRes.resturants;
      this.barChartData.datasets[0].data = this.resturants;
      this.chart?.update();
      console.log(this.resturants);
    })
  }

}
