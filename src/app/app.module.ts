import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppComponentComponent} from './app-component/app-component.component'
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';

@NgModule({
  declarations: [
    AppComponentComponent,
    PostListComponentComponent,
    PostListItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponentComponent]
})
export class AppModule { }
