import { HelperService } from 'src/app/shared/services/helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
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
    // console.log(form.value);
    // console.log(this.config);
    // form.value.voteEndTime = form.value.voteEndTime.split(',');
    // form.value.orderEndTime = form.value.orderEndTime.split(',');
    // console.log(this.config);
    this.helperService.updateConfig(this.config).subscribe((updatedConfig: any) => {
      console.log('updated Config', updatedConfig);
    });
  }

  getConfig() {
    this.helperService.getConfig().subscribe((config: any) => {
      this.config = config.config[0];
      console.log(this.config);
      // this.config.voteEndTime.join(',');
      // this.config.orderEndTime.join(',');
    })
  }
  getIndex(arr: [], fieldName: any) {
    // console.log(arr, fieldName?.name, arr?.findIndex((i: any) => i.param === fieldName.name));
    return arr?.findIndex((i: any) => i.param === fieldName.name);
  }
}
