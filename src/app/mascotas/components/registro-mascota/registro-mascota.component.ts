import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-mascota',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-mascota.component.html',
  styleUrl: './registro-mascota.component.css'
})
export class RegistroMascotaComponent {

  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      propietario: ['', Validators.required]
    });
  }

  guardar() {
    if (this.mascotaForm.valid) {
      console.log(this.mascotaForm.value);
      alert('Mascota registrada correctamente');
    }
  }
}