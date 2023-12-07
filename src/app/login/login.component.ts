import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  submitForm(): void {
    if (!this.username || !this.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: !this.username ? 'Por favor, ingrese su usuario.' : 'Por favor, ingrese su contraseña.',
      });
      return; 
    }
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find((u: User) => u.username === this.username && u.password === this.password);

    if (user) {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: `¡Hola, ${user.username}!`,
      }).then(() => {
        this.router.navigateByUrl('/dashboard');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
      });
    }
  }
}
