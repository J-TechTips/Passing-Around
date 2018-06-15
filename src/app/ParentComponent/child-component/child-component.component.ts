import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template:
  `<h2>
    {{ title }}
  </h2>`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
