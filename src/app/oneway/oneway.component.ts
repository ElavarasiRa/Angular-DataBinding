import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  data:any={
    'name':'',
    'email':'',
    'gender':'',
    'age':'',
    'adhaar':''
  }
  constructor() { }

  ngOnInit() {
  }
add(value){
  this.data.name = value.name;
  this.data.email = value.email;
  this.data.gender = value.gender;
  this.data.age = value.age;
  this.data.adhaar = value.adhaar;

   console.log(this.data)	
}
}
