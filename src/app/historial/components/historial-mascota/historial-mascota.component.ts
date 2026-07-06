import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-historial-mascota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-mascota.component.html',
  styleUrl: './historial-mascota.component.css'
})
export class HistorialMascotaComponent {

  historial: any[] = [];

  constructor(private historialService: HistorialService) {
    this.historial = this.historialService.obtenerHistorial();
  }

}