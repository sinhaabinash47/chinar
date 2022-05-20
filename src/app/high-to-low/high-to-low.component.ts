import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-high-to-low',
  templateUrl: './high-to-low.component.html',
  styleUrls: ['./high-to-low.component.css']
})
export class HighToLowComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
