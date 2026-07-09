import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../services/historial.service';
import { Historial } from '../../models/historial';

@Component({
  selector: 'app-historial-mascota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-mascota.component.html',
  styleUrl: './historial-mascota.component.css'
})
export class HistorialMascotaComponent {

  historial: Historial[] = [];

  constructor(private historialService: HistorialService) {
    this.historial = this.historialService.obtenerHistorial();
  }

}