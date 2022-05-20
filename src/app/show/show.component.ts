import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { ShowService } from '../services/food/food/show.service';
import { show } from '../shared/models/show';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {  

  constructor(private s:ShowService, private route:ActivatedRoute) { }
  show:show[]=[];
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchIteam'])
        this.show = this.s.getAll().filter(food => show.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
        else
        this.show = this.s.getAll();
    })
  }

}
