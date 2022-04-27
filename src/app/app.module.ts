import { QuienSoyService } from './Components/Quien-soy/Services/quien-soy.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuienSoyComponent } from './Components/Quien-soy/quien-soy.component';
import { LoginComponent } from './Components/Login/login.component';
import { HomeComponent } from './Components/Home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [QuienSoyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
