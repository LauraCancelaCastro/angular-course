import { Component } from '@angular/core';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent{
    public titulo = 'Página principal';
    public listado_ropa:Array<string>;
	public prenda_a_guardar:string;

	constructor(
		private _ropaService:RopaService
	){
        this.listado_ropa =[];
	    this.prenda_a_guardar = '';
    }
	ngOnInit(){
		this.listado_ropa = this._ropaService.getRopa();
		console.log(this.listado_ropa);
	}
	guardarPrenda(){
		this._ropaService.addRopa(this.prenda_a_guardar);
		this.prenda_a_guardar='';
	}
}