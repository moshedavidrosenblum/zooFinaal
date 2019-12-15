import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { 
   this.changeIndwx(0);
  }
  
  beasts=[
    { name:'tiger', size: 'small', lifeSpan:'15y', habitat:'africa', img:'http://cafe.themarker.com/media/t/156/310/2/file_0_original.jpg' },
    { name:'lion', size: 'small', lifeSpan:'1y', habitat:'holand', img:'http://cafe.themarker.com/media/t/142/163/1/file_0_big.jpg?1276521625' },
    { name:'snake', size: 'meduin', lifeSpan:'5y', habitat:'israel' , img:'https://upload.wikimedia.org/wikipedia/commons/5/52/ArbeLevy-Vipera_palaestinae_3.jpg'},
    { name:'cheeeta', size: 'large', lifeSpan:'115y', habitat:'africa', img:'http://cafe.themarker.com/media/t/291/660/file_0_big.jpg?1426007505' },
    { name:'elephent', size: 'extra large', lifeSpan:'5m', habitat:'africa' , img:'http://cafe.themarker.com/media/t/129/868/2/file_0_big.jpg?1256980500'},
  ];

 

  currentBeastIndex=0
  currentBeast 
  changeIndwx(n){
    this.currentBeastIndex += n;
    if (this.currentBeastIndex >=this.beasts.length ) {
      this.currentBeastIndex =0
    }
    if (this.currentBeastIndex <0 ) {
      this.currentBeastIndex =this.beasts.length-1
    }
    this.currentBeast = this.beasts[this.currentBeastIndex];
  }
}
