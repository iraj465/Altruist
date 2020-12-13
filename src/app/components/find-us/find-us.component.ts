import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import  {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
@Component({
  selector: 'app-find-us',
  styleUrls: ['./find-us.component.scss'],
  templateUrl: './find-us.component.html',
})

export class FindUsComponent implements AfterViewInit {
  private map;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  var marker = L.marker([ 39.8282, -98.5795 ]).addTo(this.map);
  var marker = L.marker([ 39.8282, -80.5795 ]).addTo(this.map);
  var marker = L.marker([ 37.8282, -90.5795 ]).addTo(this.map);
  var marker = L.marker([ 60.8282, 40.5795 ]).addTo(this.map);
  var marker = L.marker([ 19.8282, -98.5795 ]).addTo(this.map);
  var marker = L.marker([ 15.8282, -90.5795 ]).addTo(this.map);

  var marker = L.marker([ 5.8282, -60.5795 ]).addTo(this.map);
  var marker = L.marker([ 5.8282, -60.5795 ]).addTo(this.map);

  var marker = L.marker([ 69.8282, -74.5795 ]).addTo(this.map);
  var marker = L.marker([ 59.8282, -310.5795 ]).addTo(this.map);
  var marker = L.marker([ 55.8282, -300.5795 ]).addTo(this.map);

  var marker = L.marker([ 39.8282, -280.5795 ]).addTo(this.map);
  var marker = L.marker([ 39.8282, -98.5795 ]).addTo(this.map);
  var marker = L.marker([ 39.8282, -98.5795 ]).addTo(this.map);
  var marker = L.marker([ 39.8282, -98.5795 ]).addTo(this.map);

tiles.addTo(this.map);
  }
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 2
    });
  }
}
