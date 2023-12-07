import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  empresas = [
    { id: 1, nombre: 'Teleperformance', descripcion: 'Teleperformance es líder mundial en servicios de atención al cliente, proporcionando soluciones innovadoras para optimizar las interacciones con los clientes y mejorar la experiencia general.', imagen: './assets/img/teleperformace.jpeg' },
    { id: 2, nombre: 'Nutresa', descripcion: 'Grupo Nutresa es una empresa multinacional de alimentos con presencia en más de 75 países. Nos dedicamos a la producción y comercialización de productos alimenticios de alta calidad y valor agregado.', imagen: './assets/img/nutresa.png' },
    { id: 3, nombre: 'Tigo', descripcion: 'Tigo es una empresa líder en el sector de las telecomunicaciones, ofreciendo servicios de telefonía móvil, internet y televisión. Nos esforzamos por conectar a las personas y mejorar la vida a través de la tecnología.', imagen: './assets/img/tigo.png' },
    { id: 4, nombre: 'Alpina', descripcion: 'Alpina es reconocida por su excelencia en la producción y procesamiento de productos lácteos. Con décadas de experiencia, nos dedicamos a proporcionar alimentos saludables y nutritivos para mejorar la calidad de vida.', imagen: './assets/img/alpina.png' },
    { id: 5, nombre: 'Colombina', descripcion: 'Colombina es una empresa líder en la producción de alimentos, especializada en confitería y productos de panadería. Nuestra pasión por la calidad y la innovación nos ha convertido en referentes en la industria.', imagen: './assets/img/colombina.png' },
    { id: 6, nombre: 'Avianca', descripcion: 'Avianca es una aerolínea reconocida a nivel mundial, comprometida con brindar servicios de transporte aéreo seguros y eficientes. Con décadas de experiencia, conectamos personas y lugares, haciendo posible que el mundo esté más cerca.', imagen: './assets/img/avianca.png' },
  ];

  filtroNombre = '';
  empresasFiltradas: any[] = [];

  filtrarEmpresas() {
    this.empresasFiltradas = this.empresas.filter(empresa =>
      empresa.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }
}
