import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-registro-mascota',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-mascota.component.html',
  styleUrl: './registro-mascota.component.css'
})
export class RegistroMascotaComponent {

  mascotaForm: FormGroup;
  mascotas: Mascota[] = [];

  constructor(private fb: FormBuilder) {

    this.mascotaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      especie: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      propietario: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
    });

  }

  guardar() {

    if (this.mascotaForm.valid) {

      this.mascotas.push(
        this.mascotaForm.value as Mascota
      );

      alert('Mascota registrada correctamente');

      this.mascotaForm.reset();

    }

  }

}