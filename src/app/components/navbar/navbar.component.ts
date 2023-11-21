import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title: string = 'Frontend Digest';

  constructor(public LoginService: LoginService) {}

  toggleAdminView() {
    this.LoginService.toggleAdmin();
  }
}
