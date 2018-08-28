import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: String;
  password: String;
  failed: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  authenticate() { 
    this.failed = this.authService.check(this.login,this.password);
  }

}
