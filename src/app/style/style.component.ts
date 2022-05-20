import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { WineService } from '../services/food/food/wine.service';
import { wine } from '../shared/models/wine';


@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor(private w:WineService, private route:ActivatedRoute) { }
  wine:wine[]=[];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchIteam'])
        this.wine = this.w.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
        else
        this.wine = this.w.getAll();
    })
  }

}
