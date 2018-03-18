import {User, Address, EditModeEventData, UserBuilder} from '../models/user.model';
import { EventEmitter } from '@angular/core';

export class UserService{
    users:User[]=[];
    userListChangeEvent:EventEmitter<String>=new EventEmitter();
    editModeEvent:EventEmitter<EditModeEventData>=new EventEmitter();

    constructor(){

    }

    setEditMode(user:User, index:number){
        const newUser:User=UserBuilder.cloneUser(user);
        this.editModeEvent.emit(new EditModeEventData(newUser,index));
    }
    addUser(user:User){
        this.users.push(user);
        this.userListChangeEvent.emit("USER_ADD");
    }

    editUser(user:User, index:number){
        this.users[index] = user;
        this.userListChangeEvent.emit("USER_EDIT");
    }

    deleteUser(index:number){
        this.users.splice(index,1);
        this.userListChangeEvent.emit("USER_DELETED");
    }

    getUsers():User[]{
        return this.users.slice();
    }
}