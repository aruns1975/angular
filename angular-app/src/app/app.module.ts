import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent} from './user/user-edit/user-edit.component';

import { UserService } from './services/user.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    MenuComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
