import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitaService } from '../../../citas/services/cita.service';
import { HistorialService } from '../../../historial/services/historial.service';

@Component({
  selector: 'app-atencion-medica',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './atencion-medica.component.html',
  styleUrl: './atencion-medica.component.css'
})
export class AtencionMedicaComponent {

  atencionForm: FormGroup;
  citas: any[] = [];

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService,
    private historialService: HistorialService
  ) {
  
    this.citas = this.citaService.obtenerCitas();
  
    this.atencionForm = this.fb.group({
      mascota: ['', Validators.required],
      veterinario: ['', Validators.required],
      peso: ['', Validators.required],
      temperatura: ['', Validators.required],
      diagnostico: ['', Validators.required],
      tratamiento: ['', Validators.required],
      observaciones: ['']
    });
  
  }

  guardar() {

    if (this.atencionForm.valid) {
  
      this.historialService.agregarAtencion(
        this.atencionForm.value
      );
      
      alert('Atención registrada correctamente');
  
      this.atencionForm.reset();
  
    }
  
  }

}