import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TagsPageComponent} from "./pages/tags-page/tags-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {TicTacToeComponent} from "./pages/tictactoe/tic-tac-toe.component";
import {CatchmeComponent} from "./pages/catchme/catchme.component";

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomePageComponent},
    {path: 'tags', component: TagsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'tic-tac-toe', component: TicTacToeComponent},
    {path: 'catch-me', component: CatchmeComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
