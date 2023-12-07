import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empresaSeleccionada: string = "";
   archivoAdjunto: File | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.empresaSeleccionada = this.route.snapshot.queryParams['empresa'] || "";
  }

  private initCarousel() {
    let currentSlide = 0;
    const intervalTime = 3000;

    function showSlide(index: number) {
      const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % 3;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + 3) % 3;
      showSlide(currentSlide);
    }

    function startCarousel() {
      setInterval(() => {
        nextSlide();
      }, intervalTime);
    }

    startCarousel();
  }

  handleFileChange(event: any, empresa: string): void {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.includes('pdf')) {
      Swal.fire('¡Error!', 'Solo se aceptan archivos PDF.', 'error');
      event.target.value = '';
      return;
    }

    this.archivoAdjunto = selectedFile;
  }

  enviarHojaDeVida(empresa: string): void {
    if (!this.archivoAdjunto) {
      Swal.fire('¡Error!', 'Adjunta tu hoja de vida antes de enviar.', 'error');
      return;
    }

    Swal.fire({
      title: 'Enviar Hoja de Vida',
      html: `<p>¿Estás seguro de que quieres enviar tu hoja de vida a ${empresa}?</p>`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/dashboard'], {
          state: { empresa, archivoAdjunto: this.archivoAdjunto }
        });

        Swal.fire('¡Enviado!', 'Tu hoja de vida ha sido enviada con éxito.', 'success');
      }
    });
  }
}
