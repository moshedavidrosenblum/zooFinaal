import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';
import { BirdsService } from 'src/app/services/birds.service';
import { BeastsService } from 'src/app/services/beasts.service';
import { WildService } from 'src/app/services/wild.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(public svcbirds:BirdsService,public pagongSvc:PagingService,public SvcBests:BeastsService,public SvcWild:WildService) { }

  ngOnInit() {
  }
/*  @Output() moveItem:EventEmitter<number> = new EventEmitter<number>()
 */  moveItemPage(delta:number):void{
        console.log('PaginatorComponent moveItemPage ' + delta);
    /* this.moveItem.emit(delta) */
    switch (this.pagongSvc.currentPanel) {
       case "birds":
        this.svcbirds.changeIndwx(delta)
        console.log("this.svcbirds.currentBirdIndex",this.svcbirds.currentBirdIndex);
        break;

        case "beasts":
        this.SvcBests.changeIndwx(delta)
        console.log("this.svcbirds.currentBirdIndex",this.SvcBests.currentBeastIndex);
        break;

        case "wilds":
        this.SvcWild.changeIndwx(delta)
        console.log("this.svcbirds.currentBirdIndex",this.SvcWild.currentWildIndex);
        break;
    
      default:
        break;
    }
    
  }
}
