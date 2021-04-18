import { Component, OnInit } from '@angular/core';
import { Menuusersettings } from '../usersettings/menuusersettings';

@Component({
  selector: 'app-sideusersettings',
  templateUrl: './sideusersettings.component.html',
  styleUrls: ['./sideusersettings.component.css']
})
export class SideusersettingsComponent implements OnInit {
  listMenu = Menuusersettings;



  constructor() { }

  ngOnInit(): void {
  }

}
