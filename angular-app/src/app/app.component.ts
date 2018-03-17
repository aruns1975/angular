import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User=new User();
  users:User[]=[];
  
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
}
