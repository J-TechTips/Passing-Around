import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent implements OnInit {
  childTitle: string = "text passed to child";

  onClick(title: string) {
    console.log(title);
  }

  constructor() { }

  ngOnInit() {
  }

}
