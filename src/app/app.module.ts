import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { WorkspacesettingsComponent } from './workspacesettings/workspacesettings.component';
import { DetailsComponent } from './details/details.component';
import { TopbarPreferenceComponent } from './topbar-preference/topbar-preference.component';
import { RouterModule } from '@angular/router';
import { SideusersettingsComponent } from './sideusersettings/sideusersettings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemComponent,
    ProductListComponent,
    TodolistComponent,
    TaskComponent,
    UsersettingsComponent,
    WorkspacesettingsComponent,
    DetailsComponent,
    TopbarPreferenceComponent,
    SideusersettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UsersettingsComponent},
      { path: 'workspacesettings', component: WorkspacesettingsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
