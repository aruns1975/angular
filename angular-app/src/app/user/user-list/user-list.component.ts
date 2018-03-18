import { Component, OnInit, Input } from '@angular/core';
import { User, Address, UserBuilder } from '../../models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]; 
 
  constructor(private userService:UserService) {
     this.users=userService.getUsers();
     userService.userListChangeEvent.subscribe((event) => {
       console.log(event);
       this.users=userService.getUsers();
     })
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
    this.userService.deleteUser(index);
  }

  editCard(index){
    this.userService.setEditMode(this.users[index],index);
  }

}
