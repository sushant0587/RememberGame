import { Component, OnInit } from '@angular/core';
import { REMEMBER_ITEMS } from './items';

@Component({
  selector: 'app-remember-player',
  templateUrl: './remember-player.component.html',
  styleUrls: ['./remember-player.component.scss']
})
export class RememberPlayerComponent implements OnInit {

  public itemDisplay: string = '';

  private contentList: Array<string> = [];

  constructor() {
    this.contentList = REMEMBER_ITEMS;
  }

  ngOnInit(): void {
    this.updateItemToBeShown();
  }

  private updateItemToBeShown() {
    if (this.contentList.length > 0) {
      this.itemDisplay = this.getItem();
    } else {
      this.itemDisplay = 'Done'
    }
  }

  private getItem(): string {
    const itemIndex = Math.round(Math.random() * this.contentList.length - 0.5);
    const item = this.contentList[itemIndex];
    return this.contentList.length > 1 && item == this.itemDisplay ? this.getItem() : item;
  }

  public clickedPass() {
    let index = this.contentList.indexOf(this.itemDisplay)
    this.contentList.splice(index, 1);

    this.updateItemToBeShown();
  }

  public clickedFail() {
    this.updateItemToBeShown();
  }
}
