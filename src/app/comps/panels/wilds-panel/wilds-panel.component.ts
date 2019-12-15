import { Component, OnInit } from '@angular/core';
import { WildService } from 'src/app/services/wild.service';

@Component({
  selector: 'app-wilds-panel',
  templateUrl: './wilds-panel.component.html',
  styleUrls: ['./wilds-panel.component.css']
})
export class WildsPanelComponent implements OnInit {

  constructor(public wildSvc:WildService) { }

  ngOnInit() {
  }

}
