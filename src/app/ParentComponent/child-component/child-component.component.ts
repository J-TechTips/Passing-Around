import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template:
  `<h2>
    {{ title }}
  </h2>
  <button type="button" (click)='onClick()'>
    Click Me!
  </button>`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() title: string;
  @Output() notifyParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.notifyParent.emit(this.title);
  }
}
