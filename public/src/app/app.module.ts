import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserListComponent} from './user-list/user-list.component';
import {AppRoutingModule} from './app-routing.module';
import {IndexPageComponent} from './index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
