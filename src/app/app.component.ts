import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdsService } from './services/birds.service';
import { BeastsService } from './services/beasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazonas';
  constructor(public paging:PagingService,public birds:BirdsService,
    public beasts:BeastsService ){}
}
