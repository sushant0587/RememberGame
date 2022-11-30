import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { StringViewComponent } from './string-view/string-view.component';
import { MatButtonModule } from '@angular/material/button';
import { RememberPlayerComponent } from './remember-player/remember-player.component';

@NgModule({
  declarations: [
    AppComponent,
    StringViewComponent,
    GameListComponent,
    RememberPlayerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
