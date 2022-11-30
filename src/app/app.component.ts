import { Component } from '@angular/core';
import { GAMES_ID } from './game-list/game-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RememberGame';

  public listItemClicked(id: GAMES_ID) {
    switch (id) {
      case GAMES_ID.RememberLetters:
        
        break;
    
      default:
        break;
    }
  }
}
