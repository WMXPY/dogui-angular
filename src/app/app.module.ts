import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BlockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
