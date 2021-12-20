import { Injectable } from "@angular/core";
import {map} from 'rxjs/operators';//.pipe(map(res => res.json()));
import { Observable } from "rxjs";
import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
//import { config } from "process";

@Injectable()
export class PeticionesService{
    public url: string;
    constructor(private _http:HttpClient){
        this.url="https://jsonplaceholder.typicode.com/posts";
    }
    getPrueba(){
        return 'Hola mundo desde el servicio';
    }
    getArticulos(){
        return this._http.get(this.url).pipe(map(res => res));
    }
}