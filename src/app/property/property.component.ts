import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  image1='assets/study1.jpg';
  image2='assets/study2.jpg';
  image3='assets/study3.jpg';
  image4='assets/study4.jpg';
  image5='assets/study5.jpg';
  image6='assets/study6.jpg';
  image7='assets/study7.jpg';
  image8='assets/study8.jpg';


  constructor() { }

  ngOnInit() {
  }

}
