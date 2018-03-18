import { Component, EventEmitter, Output } from '@angular/core';
import { User, Address, EditModeEventData, UserBuilder } from '../models/user.model';

import { UserService } from '../services/user.service';
import { DomainService } from '../services/domain.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css'],
    providers: [DomainService]
  })
export class UserEditComponent{
    user:User=new User();
    previousUser:User=new User();
    isEditMode:boolean=false;
    editIndex:number;
    genders:String[];
    countries:String[];
    
    constructor(private userService:UserService, private domainService:DomainService){
        this.genders=domainService.getGenders();
        this.countries=domainService.getCountries();
        this.userService.editModeEvent.subscribe((editData:EditModeEventData)=>{
            this.user=editData.user;
            this.previousUser=UserBuilder.cloneUser(editData.user);
            this.editIndex=editData.index;
            this.isEditMode=true;
        })
    }

    onSubmit(event:Event){
        event.preventDefault();
        if(this.isEditMode)
            this.userService.editUser(this.user, this.editIndex);
        else
            this.userService.addUser(this.user);
        this.cancelEditMode();
    }
    cancelEditMode(){
        this.user=new User();
        this.editIndex=-1;
        this.isEditMode=false;
        this.previousUser=new User();
    }

    clear(){
        this.user = UserBuilder.cloneUser(this.previousUser);
    }

}