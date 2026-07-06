import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  historial: any[] = [];

  agregarAtencion(atencion: any) {
    this.historial.push(atencion);
  }

  obtenerHistorial() {
    return this.historial;
  }

}