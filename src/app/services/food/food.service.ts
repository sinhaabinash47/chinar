import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll():Foods[]{
    return [
      {
        id: 1,
        name: "Tandoori Lamb Chops",
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/image/e.avif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: "Butter Chicken",
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia','middle east','china'],
        star: 4.7,
        imageUrl: 'assets/image/f.avif',
        tags: ['SlowFood','Lunch'],
      },
      {
        id: 3,
        name: "Chicken Nuggets",
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['French Fries','Singapore'],
        star: 4.5,
        imageUrl: 'assets/image/g.avif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: "Shami Kabab",
        price: 2,
        cookTime: '10-20',
        favorite: false,
        origins: ['India'],
        star: 3.5,
        imageUrl: 'assets/image/h.avif',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: "Dosa",
        price:11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Bangalore'],
        star: 4,
        imageUrl: 'assets/image/i.avif',
        tags: ['Breakfast','soup'],
      },
      {
        id: 6,
        name: "Paneer Achari Tikka",
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Melaka','Malaysia','Malacca'],
        star: 4.5,
        imageUrl: 'assets/image/j.avif',
        tags: ['Lunch','Dinner'],
      },
      {
        id: 7,
        name: "Rice Fried",
        price: 15,
        cookTime: '10-20',
        favorite: false,
        origins: ['Indian'],
        star: 4.5,
        imageUrl: 'assets/image/k.avif',
        tags: ['Lunch', 'Dinner'],
      },
      {
        id: 8,
        name: "Spring Roll",
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Indian','Chines','French'],
        star: 4.5,
        imageUrl: 'assets/image/k.avif',
        tags: ['FastFood','Evening'],
      },
    ];
  }
}


