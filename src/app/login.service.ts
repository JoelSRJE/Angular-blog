import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAdmin: boolean = true;

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  constructor() {}
}
