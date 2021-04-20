import { Component, OnInit } from '@angular/core';
import { Appearance } from './appearance';
import { Commonlyused } from './commonlyused';
import { Cursor } from './cursor';
import { Find } from './find';
import { Texteditor } from './texteditor';
import { Workbench } from './workbench';

@Component({
  selector: 'app-workspacesettings',
  templateUrl: './workspacesettings.component.html',
  styleUrls: ['./workspacesettings.component.css']
})
export class WorkspacesettingsComponent implements OnInit {

  usersetting = Commonlyused;
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
