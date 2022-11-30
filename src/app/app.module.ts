import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { StringViewComponent } from './string-view/string-view.component';
import { MatButtonModule } from '@angular/material/button';
import { RememberPlayerComponent } from './remember-player/remember-player.component';
import { ButtonViewComponent } from './common/button-view/button-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StringViewComponent,
    GameListComponent,
    RememberPlayerComponent,
    ButtonViewComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
