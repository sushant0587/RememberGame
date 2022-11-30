import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-string-view',
  templateUrl: './string-view.component.html',
  styleUrls: ['./string-view.component.scss']
})
export class StringViewComponent implements OnInit, AfterViewInit {

  private _item: string = '';
  @Input() public set item(value: string) {
    this._item = value;
    this.setRamdonColor();
  }
  public get item(): string {
    return this._item;
  }

  @ViewChild("stringVal", { static: true }) stringValView!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setRamdonColor();
  }

  public setRamdonColor() {
    var randomColor = Math.floor(Math.random() * 0xA0A0A0 << 0).toString(16);
    this.stringValView.nativeElement.style.setProperty('color', '#' + randomColor);
  }
}
