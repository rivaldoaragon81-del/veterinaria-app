import { Routes } from '@angular/router';
import { RegistroMascotaComponent } from './mascotas/components/registro-mascota/registro-mascota.component';
import { AgendaCitasComponent } from './citas/components/agenda-citas/agenda-citas.component';
import { HistorialMascotaComponent } from './historial/components/historial-mascota/historial-mascota.component';
import { AtencionMedicaComponent } from './atencion/components/atencion-medica/atencion-medica.component';
export const routes: Routes = [
  {
    path: '',
    component: RegistroMascotaComponent
  },
  {
    path: 'citas',
    component: AgendaCitasComponent
  },
  {
    path: 'atencion',
    component: AtencionMedicaComponent
  },
  {
    path: 'historial',
    component: HistorialMascotaComponent
  }
];