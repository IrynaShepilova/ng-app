import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TagsPageComponent} from "./pages/tags-page/tags-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {TicTacToeComponent} from "./pages/tictactoe/tic-tac-toe.component";

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomePageComponent},
    {path: 'tags', component: TagsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'tic-tac-toe', component: TicTacToeComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
