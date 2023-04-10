import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { LeftMenuComponent } from './main-layout/left-menu/left-menu.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule} from "@angular/material/input";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    LeftMenuComponent,
    FooterComponent,
    TagsPageComponent,
    HomePageComponent
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
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
