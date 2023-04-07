import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TagsPageComponent} from "./pages/tags-page/tags-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomePageComponent},
  {path: 'tags', component: TagsPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
