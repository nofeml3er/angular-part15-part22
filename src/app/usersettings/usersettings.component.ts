import { Component, OnInit } from '@angular/core';
import { Appearance } from './appearance';
import { CommonlyUsed } from './commonlyused'
import { Cursor } from './cursor';
import { Find } from './find';
import { Menuusersettings } from './menuusersettings';
import { Texteditor } from './texteditor'
import { Workbench } from './workbench';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {

  usersetting = CommonlyUsed;
  textEditor = Texteditor;
  cursor = Cursor;
  find = Find;
  workBench = Workbench;
  appearance = Appearance;

  constructor() {    
   }

  ngOnInit(): void {
  }

}
