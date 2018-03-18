import { Component, EventEmitter, Output } from '@angular/core';
import { User, Address } from '../models/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
  })
export class UserEditComponent{
    user:User=new User();
    genders:String[]=['Male','Female'];
    countries:String[]=[];
    @Output() addUserEvent:EventEmitter<User>=new EventEmitter();
    
    
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

    onSubmit(event:Event){
        event.preventDefault();
        this.addUserEvent.emit(this.user);
        this.user=new User();
    }

}