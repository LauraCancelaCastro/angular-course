import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos: any;

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche ("Seat Panda","120","Blanco"),
            new Coche ("Renault Clio","110","Azul")
        ];
    }
    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if(!this.articulos){
                    console.log('Error en el servidor');
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    onSubmit(){
        console.log(this.coche);
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}