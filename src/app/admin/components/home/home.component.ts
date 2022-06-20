import { ResturantsService } from './../../../shared/services/resturants.service';
import { AuthService } from './../../../shared/services/auth.service';
import { Observable, Subscription, forkJoin } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { ChartConfiguration, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  now = new Date();
  private userListnerSub: Subscription;
  private chartsSub: Subscription;
  loggedUser: any;
  // @ViewChild('resturantsChart') resturantsChart: BaseChartDirective | undefined;
  // @ViewChild('usersChart') usersChart: BaseChartDirective | undefined;
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;
  barChartType: ChartType = 'bar';
  resturantsChartData = {
    datasets: [{
      backgroundColor: '#09c',
      data: [],
      borderColor: '#09c'
    }]
  };
  usersChartData = {
    datasets: [{
      backgroundColor: '#09c',
      data: [],
      borderColor: '#09c'
    }]
  };
  usersChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    parsing: {
      xAxisKey: 'name',
      yAxisKey: 'wallet',
    },
    scales: {
      x: {
        ticks: {
          padding: 16,
          font: {
            size: 14,
            lineHeight: 1.375,
            family: 'poppins'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  resturantsChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    parsing: {
      xAxisKey: 'name',
      yAxisKey: 'vote',
    },
    scales: {
      x: {
        ticks: {
          padding: 16,
          font: {
            size: 14,
            lineHeight: 1.375,
            family: 'poppins'
          }
        }
      }
    },
  };
  constructor(
    private authService: AuthService,
    private resturantsService: ResturantsService
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.userListnerSub = this.authService
      .getAuthUserListner()
      .subscribe((user: any) => {
        this.loggedUser = user;
      });
    this.chartsSub = forkJoin(
      [this.resturantsService.getResturants(),
      this.authService.getUsers()]
    ).subscribe(([resturantsRes, usersRes]: [any, any]) => {
      this.resturantsChartData.datasets[0].data = resturantsRes.resturants;
      this.usersChartData.datasets[0].data = usersRes.users;
      this.charts.forEach((chart: any) => {
        chart.update();
      })
    });
  }

  ngOnDestroy() {
    this.userListnerSub?.unsubscribe();
    this.chartsSub?.unsubscribe();
  }

}
