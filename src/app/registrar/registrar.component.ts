import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';

interface User {
  username: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  username: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  submitRegisterForm() {
    if (!this.username || !this.lastName || !this.email || !this.password) {
      const emptyField = !this.username ? 'Nombre' :!this.lastName ? 'Apellido' :!this.email ? 'Correo electrónico' :'Contraseña';
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: `Por favor, complete el campo: ${emptyField}.`,
      });
      return; 
    }

    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = existingUsers.some((user: User) => user.username === this.username);

    if (!userExists) {
      existingUsers.push({
        username: this.username,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      });

      localStorage.setItem('users', JSON.stringify(existingUsers));
      this.router.navigate([""]);

      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Usuario registrado correctamente. Redirigiendo a la página de inicio de sesión...',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El usuario ya existe. Por favor, elige otro nombre de usuario.',
      });
    }
  }
}