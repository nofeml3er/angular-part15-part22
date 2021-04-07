import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  tasks: Task[];
  id: number;
  name: string;
  des: string;
  isShow = false;
  isSelected : boolean;
  i : number;

  constructor() { 
    this.tasks = [];
    this.tasks.push({
      id: 1,
      name: "Mr.A",
      description: "A Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, possimus?"
    },
    {
      id: 2,
      name: "Mr.B",
      description: "B Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, possimus?"
    },
    {
      id: 3,
      name: "Mr.C",
      description: "C Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, possimus?"
    })
  }

  ngOnInit(): void {
  }

  selected(i) {
    if(i !== this.i) {
      this.isShow = false;
    }
    if( this.isShow == true){
      this.isShow = false;
    }else {
      this.isShow = true;
    }
      this.i = i;
  }
  
  close(){
    this.isShow = false;
  }

  add(){
    this.tasks.push({"id": this.id, "name": this.name, "description": this.des})
  }

  removeThisTask(task : Task) {
    console.log(task);
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

}