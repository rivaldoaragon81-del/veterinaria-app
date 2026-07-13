import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../services/cita.service';
import { EstadoCitaPipe } from '../../../shared/pipes/estado-cita.pipe';
import { ResaltarCitaDirective } from '../../../shared/directives/resaltar-cita.directive';
import { Cita } from '../../models/cita';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-agenda-citas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EstadoCitaPipe,
    ResaltarCitaDirective
  ],
  templateUrl: './agenda-citas.component.html',
  styleUrl: './agenda-citas.component.css'
})
export class AgendaCitasComponent {

  citaForm: FormGroup;
  citas: Cita[] = [];
  codigoBusqueda: string = '';
  resultadoBusqueda: any = null;
  fechaMinima: string = new Date()
  .toISOString()
  .split('T')[0];
  fechaMaxima: string = (() => {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + 7);
  return fecha.toISOString().split('T')[0];
})();

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService
  ) {

    this.citaForm = this.fb.group({
      mascota: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', Validators.required],
      veterinario: ['', Validators.required],
      estado: ['Pendiente']
    });
    
    this.citas = this.citaService.obtenerCitas();

  }

  guardar() {

  if (this.citaForm.valid) {

    const nuevaCita = {
      codigo: this.citaService.generarCodigo(),
      ...this.citaForm.value
    };

    this.citaService.agregarCita(
      nuevaCita
    );

    this.citas = this.citaService.obtenerCitas();

    console.log('Cita registrada:', nuevaCita);

    alert('Cita registrada correctamente');

    this.citaForm.reset({
      estado: 'Pendiente'
    });

  }

}
  buscarCita() {

    this.resultadoBusqueda = this.citas.find(
      cita => cita.codigo === this.codigoBusqueda
    );

  }

}