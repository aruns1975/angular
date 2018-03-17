import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User=new User();

  
  onSubmit(event:Event){
    event.preventDefault();
    this.user=new User();
  }
}

class User{
  userName:String='';
  age:number;
}
