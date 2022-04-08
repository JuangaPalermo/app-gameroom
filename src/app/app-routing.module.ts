import { HomeComponent } from './Components/Home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/Login/login.component';
import { QuienSoyComponent } from './Components/Quien-soy/quien-soy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'quien-soy',
    component: QuienSoyComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
