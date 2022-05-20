import { Injectable } from '@angular/core';
import { show } from 'src/app/shared/models/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }



  getAll():show[]{
    return [
      {
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/m.avif',
      },
      {
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/n.avif',
      },
      {
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/o.avif',
      },
      {
        name: "Pizza Pepperoni",
        imageUrl: 'assets/image/k.avif',
      },
    ];
  }
}





