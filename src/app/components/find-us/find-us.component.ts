import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-find-us',
  styleUrls: ['./find-us.component.css'],
  templateUrl: './find-us.component.html',
})

export class FindUsComponent implements AfterViewInit {
  private map;

  constructor() { }

  ngAfterViewInit(): void {
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
  }
}
