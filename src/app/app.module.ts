import { QuienSoyService } from './Components/Quien-soy/Services/quien-soy.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuienSoyComponent } from './Components/Quien-soy/quien-soy.component';
import { LoginComponent } from './Components/Login/login.component';
import { HomeComponent } from './Components/Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule],
  providers: [QuienSoyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
