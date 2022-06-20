import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit, OnDestroy {
  updateConfigSub: Subscription
  getConfigSub: Subscription
  errors: any;
  config = {
    voteEndTime: '0:0:0',
    orderEndTime: '0:0:0'
  }
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.getConfig();
  }

  submitConfig(form: any) {
    this.updateConfigSub = this.helperService.updateConfig(this.config).subscribe((updatedConfig: any) => {
    });
  }

  getConfig() {
    this.getConfigSub = this.helperService.getConfig().subscribe((config: any) => {
      this.config = config.config[0];
    })
  }
  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }

  ngOnDestroy(): void {
    this.updateConfigSub?.unsubscribe();
    this.getConfigSub?.unsubscribe();
  }
}
