import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},

  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'user-item', component: UserItemComponent},
  {path: 'user-list', component: UserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
