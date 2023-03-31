import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainPageComponent} from "./pages/main-page/main-page.component";

export const routes: Routes = [
   // { path: "", redirectTo: "/"},
  { path: 'main', component: MainPageComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
