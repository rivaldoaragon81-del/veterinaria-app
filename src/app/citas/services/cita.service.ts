import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  citas: any[] = [];

  agregarCita(cita: any) {
    this.citas.push(cita);
  }

  obtenerCitas() {
    return this.citas;
  }

}