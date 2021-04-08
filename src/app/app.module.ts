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
import { PreferenceComponent } from './preference/preference.component';
import { WorkspacesettingsComponent } from './workspacesettings/workspacesettings.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemComponent,
    ProductListComponent,
    TodolistComponent,
    TaskComponent,
    UsersettingsComponent,
    PreferenceComponent,
    WorkspacesettingsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
