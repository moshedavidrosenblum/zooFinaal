import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { }
  beasts=[
    { name:'tiger', size: 'small', lifeSpan:'15y', habitat:'africa', img:'https://bit.ly/2XdxbTP' },
    { name:'lion', size: 'small', lifeSpan:'1y', habitat:'holand', img:'https://bit.ly/2XdxbTP' },
    { name:'snake', size: 'meduin', lifeSpan:'5y', habitat:'israel' , img:'https://bit.ly/2XdxbTP'},
    { name:'cheeeta', size: 'large', lifeSpan:'115y', habitat:'africa', img:'https://bit.ly/2XdxbTP' },
    { name:'elephent', size: 'extra large', lifeSpan:'5m', habitat:'africa' , img:'https://bit.ly/2XdxbTP'},
  ];

  currentBeastsIndex = 0;
  currentBeast = this.beasts[this. currentBeastsIndex];
}
