import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User=new User();
  users:User[]=[];
  countries:String[]=[];
  genders:String[]=['Male','Female'];

  constructor(){
    this.countries.push('India');
    this.countries.push('United States of America');
    this.countries.push('Australia');
    this.countries.push('Cannada');
    this.countries.push('Germany');
    this.countries.push('Italy');
    this.countries.push('Russia');
    this.countries.push('The Netherlands');
    this.countries.push('Belgium');
  }
  getBorder(user:User){
    console.log(user);
    if(user.gender==='Female'){
      return "#FF69B4";
    }
    return "#80acf2";
  }
  
  onSubmit(event:Event){
    event.preventDefault();
    this.users.push(this.user);
    this.user=new User();
  }
  deleteCard(index){
    this.users.splice(index,1);
  }

}

class User{
  userName:String='';
  age:number;
  gender:String='';
  address:Address=new Address();
}

class Address{
  add1:String='';
  add2:String='';
  add3:String='';
  area:String='';
  city:String='';
  country:String='India';
}
