import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar-preference',
  templateUrl: './topbar-preference.component.html',
  styleUrls: ['./topbar-preference.component.css']
})
export class TopbarPreferenceComponent implements OnInit {
  isSelectedUser = true;
  isSelectedWork = false;
  x = 0;

  constructor() { }

  selectUser() {
    if (this.x == 1) {
      return this.isSelectedWork = true,
        this.isSelectedUser = false,
        console.log(this.x);
      } else {
        return this.x = 0,
        this.isSelectedWork = false,
        this.isSelectedUser = true,
        console.log(this.x);
    }
  }

  selectWork() {
    if (this.x == 0) {
      return this.isSelectedWork = true,
        this.isSelectedUser = false,
        console.log(this.x);
    } else {
      return this.isSelectedWork = false,
        this.isSelectedUser = true,
        this.x = 1,
        console.log(this.x);
    }
  }



  ngOnInit(): void {
  }

}
