import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {
    //el public hace uqe lo pueda usar en cualquier scope
  }

  ngOnInit(): void {}

  redirect() {
    this.router.navigateByUrl('');
  }
}
