import { Component, OnInit } from '@angular/core';
import { Workspacesettings } from './workspacesettings';

@Component({
  selector: 'app-workspacesettings',
  templateUrl: './workspacesettings.component.html',
  styleUrls: ['./workspacesettings.component.css']
})
export class WorkspacesettingsComponent implements OnInit {

  workspacesetting : Workspacesettings[];

  constructor() { 
    this.workspacesetting = [];
    this.workspacesetting.push({
      title: "Files: Auto Save (Modified in: User)",
      detail: "Controls auto save of dirty editors. Read more about autosave here.",
      value: "off"
    });
  this.workspacesetting.push({
      title: "Editor: Font Size (Modified in: User)",
      detail: "Controls the font size in pixels.",
      value: 13
    });
  this.workspacesetting.push({
      title: "Editor: Font Family (Modified in: User)",
      detail: "Controls the font family.",
      value: "MeMenlo, Monaco, 'Courier New', monospace"
    })
  }

  ngOnInit(): void {
  }

}
