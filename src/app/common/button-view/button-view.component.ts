import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements OnInit {

  @Output() public buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>;

  @Input() public title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public bottonClick() {
    this.buttonClicked.emit(true);
  }
}
