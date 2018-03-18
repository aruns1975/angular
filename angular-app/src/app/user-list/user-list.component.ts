import { Component, OnInit, Input } from '@angular/core';
import { User, Address, UserBuilder } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users:User[]=[];
 
  constructor() {
   
   }

  ngOnInit() {
  }

  getBorder(user:User){
    if(user.gender==='Female'){
      return "#ff96ca";
    }
    return "#80acf2";
  }
  
  deleteCard(index){
      this.users.splice(index,1);
  }
}
