import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HeaderComponent} from './main-layout/header/header.component';
import {LeftMenuComponent} from './main-layout/left-menu/left-menu.component';
import {FooterComponent} from './main-layout/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {TagsPageComponent} from './pages/tags-page/tags-page.component';
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ToastrModule} from "ngx-toastr";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TicTacToeComponent } from './pages/tictactoe/tic-tac-toe.component';
import { CatchmeComponent } from './pages/catchme/catchme.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {TokenInterceptor} from "./token.interceptor";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from "./store/reducers";
import {StoreEffects} from "./store/effects";

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HeaderComponent,
        LeftMenuComponent,
        FooterComponent,
        TagsPageComponent,
        HomePageComponent,
        LoginPageComponent,
        TicTacToeComponent,
        CatchmeComponent,
        ProfilePageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatIconModule,
        CdkAccordionModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ToastrModule.forRoot(),
        FormsModule,
        StoreModule.forRoot({  reducer }, {}),
        EffectsModule.forRoot(StoreEffects),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
