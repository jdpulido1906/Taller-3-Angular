import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent implements OnInit {
  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      puesto: [''],
      telefono: [''],
      hojaVida: ['', [Validators.required,]]

    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const camposInvalidos: string[] = this.obtenerCamposInvalidos();

    if (camposInvalidos.length === 0) {
      const datosPerfil = this.perfilForm.value;
      localStorage.setItem('datosPerfil', JSON.stringify(datosPerfil));

      this.mostrarAlertaExito();
    } else {
      this.mostrarAlertaError(camposInvalidos);
    }
  }

  private mostrarAlertaExito(): void {
    Swal.fire({
      title: '¡Éxito!',
      text: 'Los cambios se han guardado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4CAF50',
      timer: 3000,
      timerProgressBar: true
    });
  }

  private mostrarAlertaError(camposInvalidos: string[]): void {
    let mensaje = 'Por favor, completa los siguientes campos:<br>';
    mensaje += camposInvalidos.join('<br>');

    Swal.fire({
      title: 'Error',
      html: mensaje,
      icon: 'error',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#d9534f'
    });
  }

  private obtenerCamposInvalidos(): string[] {
    const camposInvalidos: string[] = [];

    Object.keys(this.perfilForm.controls).forEach((campo) => {
      const control: AbstractControl | null = this.perfilForm.get(campo);

      if (control && (control.value === '' || (campo === 'telefono' && !/^\d+$/.test(control.value)))) {
        camposInvalidos.push(campo);
      }
    });

    return camposInvalidos;
  }


}
