import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  constructor() { 
    this.changeIndwx(0)
  }
 wilds=[
   { name:'gorila', size: 'small', lifeSpan:'15y', habitat:'africa', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKm4m7jC6ILJC9Pv8s1XztLEMebtH78K_WPvpbhdbAQf74Ts7kA&s' },
   { name:'woolf', size: 'small', lifeSpan:'1y', habitat:'holand', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsBhFjn2kAr75JUjg3ixEDjaanwKV98ylgz_Y5U-aKTPjlChrHw&s' },
   { name:'bear', size: 'meduin', lifeSpan:'5y', habitat:'israel' , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRosxSllkqMJIdta71uXGiU7s1rcoUUiNE4iwCk-bkVOMSpdtDg&s'},
   { name:'fox', size: 'large', lifeSpan:'115y', habitat:'africa', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTn4dFazDa9jILxOswKlZelQobyohjWuyV7cqwQZTvjlrLBrZj&s' },
   { name:'karnaf', size: 'extra large', lifeSpan:'5m', habitat:'africa' , img:'http://cafe.themarker.com/thumbnails/t/202/298/2/file_0_b.jpg?1297032058'},
 ];
 currentWildIndex=0
currentWild={}
 changeIndwx(n){
   this.currentWildIndex += n;
   console.log("movee");
   
   if (this.currentWildIndex >=this.wilds.length ) {
     this.currentWildIndex =0
   }
   if (this.currentWildIndex <0 ) {
     this.currentWildIndex =this.wilds.length-1
   }
   this.currentWild = this.wilds[this.currentWildIndex];
 }
}
