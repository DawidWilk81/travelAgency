import { Component, OnInit } from '@angular/core';
import { faStar, faMagnifyingGlass, faCalendarAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero-page-l',
  templateUrl: './hero-page-l.component.html',
  styleUrls: ['./hero-page-l.component.scss']
})
export class HeroPageLComponent implements OnInit {
  star = faStar;
  places:any[] = [];
  magnify = faMagnifyingGlass;
  callendar = faCalendarAlt;
  like = faThumbsUp;
  ngOnInit(): void {
    this.places = [
      {place:'Kioto', price:480, stars:5, img:'../../assets/places/kioto.jpg'},
      {place:'Egypt', price:280, stars:4, img:'../../assets/places/egypt.jpg'},
      {place:'Los Angeles', price:200, stars:4, img:'../../assets/places/losAngeles.jpg'},
      {place:'Sydney', price:380, stars:5, img:'../../assets/places/sydney.jpg'},
    ]
  }
  scroll(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }
}
