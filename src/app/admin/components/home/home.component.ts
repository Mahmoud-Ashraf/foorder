import { ResturantsService } from './../../../shared/services/resturants.service';
import { AuthService } from './../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
  private usersSub: Subscription;
  private resturantsSub: Subscription;
  loggedUser: any;
  resturants: any;
  @ViewChild(BaseChartDirective) resturantsChart: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) usersChart: BaseChartDirective | undefined;
  barChartType: ChartType = 'bar';
  resturantsChartData = {
    datasets: [{
      backgroundColor: '#09c',
      data: [],
      // color: '#fff',
      borderColor: '#09c'
    }]
  };
  usersChartData = {
    datasets: [{
      backgroundColor: '#09c',
      data: [],
      // color: '#fff',
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
        display: false
      }
    },
    // scales: {
    
    //   ticks: {
    //     fontSize: 12,
    //     padding: 0,
    //     fontFamily: 'Hacen-Algeria'
    //   }
    // }
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
          // callback: (value, index, values) => {
          //   console.log(value, index, values);
          //   return value;
          // },
          // backdropColor: '#5D5FEF',
          // backdropPadding: 50,
          // showLabelBackdrop: true,
          // color: '#fff',
          font: {
            size: 14,
            lineHeight: 1.375,
            family: 'poppins'
          }
        }
      }
    },
    // plugins: {
    //   legend: {
    //     display: true,
    //     labels: {
    //       font: {
    //         size: 16,
    //         lineHeight: 1.375,
    //         family: 'poppins'
    //       }
    //     }
    //   }
    // },
    // elements: {
    //   bar: {
    //     borderRadius: 8,
    //     backgroundColor: '#56CCF2',
    //     borderColor: '#56CCF2',
    //   }
    // },
    // layout: {
    //   autoPadding: false,
    //   padding: 90
    // }
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
      });
    this.resturantsSub = this.resturantsService.getResturants().subscribe((resturantsRes: any) => {
      this.resturantsChartData.datasets[0].data = resturantsRes.resturants;
      this.resturantsChart?.update();
    });
    this.usersSub = this.authService.getUsers().subscribe((usersRes: any) => {
      this.usersChartData.datasets[0].data = usersRes.users;
      this.usersChart?.update();
    })
  }

  ngOnDestroy() {
    this.userListnerSub?.unsubscribe();
    this.usersSub?.unsubscribe();
    this.resturantsSub?.unsubscribe();
  }

}
