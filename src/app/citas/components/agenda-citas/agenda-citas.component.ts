import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-agenda-citas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agenda-citas.component.html',
  styleUrl: './agenda-citas.component.css'
})
export class AgendaCitasComponent {

  citaForm: FormGroup;

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

  }

  guardar() {

    if (this.citaForm.valid) {

      this.citaService.agregarCita(
        this.citaForm.value
      );

      console.log('Cita registrada:', this.citaForm.value);

      alert('Cita registrada correctamente');

      this.citaForm.reset({
        estado: 'Pendiente'
      });

    }

  }

}