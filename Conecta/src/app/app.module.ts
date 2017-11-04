import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BodyMainComponent } from './body-main/body-main.component';
import { BodyTitleComponent } from './body-title/body-title.component';
import { LoginComponent } from './login/login.component';
import { NovedadComponent } from './novedad/novedad.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BodyMainComponent,
    BodyTitleComponent,
    LoginComponent,
    NovedadComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
