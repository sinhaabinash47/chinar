import { Injectable } from '@angular/core';
import { wine } from 'src/app/shared/models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor() { }


  
  getAll():wine[]{
    return [
      {
        favorite: false,
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/a.avif',
      },
      {
        favorite: false,
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/b.avif',
      },
      {
        favorite: false,
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/c.avif',
      },
      {
        favorite: false,
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/d.avif',
      },
    ];
  }
}
