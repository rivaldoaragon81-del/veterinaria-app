import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService { //servicio que administra las citas....

  citas: any[] = [];

  private contador = 1;

  generarCodigo(): string {

    const codigo =
      'COD' +
      this.contador.toString().padStart(3, '0');

    this.contador++;

    return codigo;

  }

  agregarCita(cita: any) {
    this.citas.push(cita);
  }

  obtenerCitas() {
    return this.citas;
  }

}