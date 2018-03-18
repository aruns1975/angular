import { Component } from '@angular/core';
import { User, Address, UserBuilder } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:User[]=[];
  
  constructor(){
    const builder1=new UserBuilder();
    this.users.push(builder1.construtUser("Arun",34,"Male"));
    this.users.push(builder1.construtUser("Karpagam",36,"Female"));
  }

  addUser(user:User){
    this.users.push(user);
  }
  deleteCard(index){
    this.users.splice(index,1);
  }

  editUser(user:User){

  }




}


