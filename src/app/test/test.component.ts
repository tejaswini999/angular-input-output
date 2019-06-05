import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callEvent() {
    this.childEvent.emit('Message: Output from child');
  }

}
