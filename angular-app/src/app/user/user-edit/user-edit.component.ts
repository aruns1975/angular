import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';

import { User, Address, EditModeEventData, UserBuilder } from '../../models/user.model';

import { UserService } from '../../services/user.service';
import { DomainService } from '../../services/domain.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css'],
    providers: [DomainService]
  })
export class UserEditComponent{
    @ViewChild('userForm')userForm:NgForm;
    shouldDisplay=false;
    previousUser:User=new User();
    isEditMode:boolean=false;
    editIndex:number;
    genders:String[];
    countries:String[];
    
    constructor(private userService:UserService, private domainService:DomainService){
        this.setDomainValues();
        this.listenForSetUserEditEvent();
        this.listenForUserUpdateEvent();
    }

    onSubmit(event:Event){
        this.shouldDisplay=true;
        event.preventDefault();
        console.log(this.userForm);
        if(!this.userForm.invalid){
            if(this.isEditMode)
                this.userService.editUser(this.userForm.value, this.editIndex);
            else
                this.userService.addUser(this.userForm.value);
            this.userForm.reset();
            this.cancelEditMode();    
        }
    }
    cancelEditMode(){
        this.shouldDisplay=false;
        this.userForm.reset();
        this.editIndex=-1;
        this.isEditMode=false;
        this.previousUser=new User();
    }

    clear(){
        this.shouldDisplay=false;
        this.userForm.setValue(UserBuilder.cloneUser(this.previousUser));
    }

    setDomainValues(){
        this.genders=this.domainService.getGenders();
        this.countries=this.domainService.getCountries();
    }

    listenForSetUserEditEvent(){
        this.userService.editModeEvent.subscribe((editData:EditModeEventData)=>{
            this.userForm.setValue(editData.user);
            this.previousUser=UserBuilder.cloneUser(editData.user);
            this.editIndex=editData.index;
            this.isEditMode=true;
        });
    }

    listenForUserUpdateEvent(){
        this.userService.userListChangeEvent.subscribe((event:String)=>{
            this.cancelEditMode();
        });
    }

    

}