import { Component, OnInit } from '@angular/core';
import { CommonlyUsed } from './commonlyused'
import { Cursor } from './cursor';
import { Texteditor } from './texteditor'

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {

  usersetting : CommonlyUsed[];
  textEditor : Texteditor[];
  cursor : Cursor[];

  constructor() {
    this.usersetting = [];
    this.usersetting.push({
        title: "Files: Auto Save",
        detail: "Controls auto save of dirty editors. Read more about autosave here.",
        value: "off"
      });
    this.usersetting.push({
        title: "Editor: Font Size",
        detail: "Controls the font size in pixels.",
        value: 13
      });
    this.usersetting.push({
        title: "Editor: Font Family",
        detail: "Controls the font family.",
        value: "Source Code Pro"
      });
    this.usersetting.push({
        title: "Editor: Tab Size",
        detail: "The number of spaces a tab is equal to. This setting is overridden based on the file contents when Editor: Detect Indentation is on.",
        value: 4
      });
    this.usersetting.push({
        title: "Editor: Render Whitespace",
        detail: "Controls how the editor should render whitespace characters",
        value: "selection"
      });
    this.usersetting.push({
        title: "Editor: Cursor Style",
        detail: "Controls the cursor style.",
        value: "line"
      });
    
    this.textEditor = [];
    this.textEditor.push({
        title: "Accessibility Support",
        detail: "Controls wheter the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.",
        value: "auto"
      });

    this.cursor = [];
    this.cursor.push({
        title: "Corsor Blinking",
        detail: "Controls the cursor animation style.",
        value: "blink"
      });
    this.cursor.push({
        title: "Corsor Smooth Caret Animation",
        detail: "Controls whether the smooth caret animation should be enabled.",
        value: false
      })
    
   }

  ngOnInit(): void {
  }

}
