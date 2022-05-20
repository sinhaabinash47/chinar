import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { wine } from '../shared/models/wine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';

  foods:Foods[]=[];

  constructor(private fs:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchIteam'])
        this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
        else
        this.foods = this.fs.getAll();
    })
  }

}
