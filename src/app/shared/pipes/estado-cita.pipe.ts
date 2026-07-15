import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCita',
  standalone: true
})
export class EstadoCitaPipe implements PipeTransform {

  transform(value: string): string {   ///pipe personalizado para formatear el estado,

    switch (value) {

      case 'Pendiente':
        return '🟡 Pendiente';

      case 'Atendida':
        return '🟢 Atendida';

      default:
        return value;

    }

  }

}