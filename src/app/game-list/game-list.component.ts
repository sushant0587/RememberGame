import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  public gameList: Array<string>;

  @Output() public itemClicked: EventEmitter<GAMES_ID> = new EventEmitter<GAMES_ID>;

  constructor() {
    this.gameList = [
      'Remember Letters',
    ];
  }

  ngOnInit(): void {
  }

  public clickedItem(index: number) {
    this.itemClicked.emit(index);
  }

}

export enum GAMES_ID {
  RememberLetters = 0,
}