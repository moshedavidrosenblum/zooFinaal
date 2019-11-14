import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public paging:PagingService) { } //בקונסטרקטור אני אומר לו לקבל אובייקט מסוג פייגינג ניימ וצריך לתת לו שם ןלהגיד פבליק בתוך האובייקט הזה יש מישתנה שיתן סוג של ציפור

  ngOnInit() {
  }
// הפונקציה הזו מקבלת סטרינג שיגיע ממי שיקרא לה הפונקציה וויוד בגלל שיש לה גישה לאובייקט פייג'ינגסקביס היא תעדכן את המישתנה קורנטפאנל שנמצא בתוך פייג'ינגברביבס למה שהיא קיבלה בפונקציה
  navTo(pageName:string):void{
  this.paging.currentPanel=pageName
  }

}
