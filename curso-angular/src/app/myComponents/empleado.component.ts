import { Component } from '@angular/core';

@Component({
    selector: 'empleado',
    template: `
        <h2>{{nombre_empleado}}</h2>
    `
})
export class EmpleadoComponent{
    public nombre_empleado = 'Alec MacGardin';
}