import { Component, OnInit } from '@angular/core';
import { Resturant } from 'src/app/models/resturant';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  constructor(
    private loader: LoaderService,
    private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit(): void {
  }

  selectResturant(resturant: Resturant): void {
  }

  vote(): void {
  }

}
