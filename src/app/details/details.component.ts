import { Component, OnInit, Input } from '@angular/core';
import { Details } from './details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  detail: Details;

  constructor() { }

  ngOnInit(): void {
  }

}
