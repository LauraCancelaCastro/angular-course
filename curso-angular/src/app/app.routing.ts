import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './myComponents/menu/home.component';
import { ContactoComponent } from './myComponents/menu/contacto.component';

import { EmpleadoComponent } from './myComponents/empleado.component';
import { CochesComponent } from './myComponents/coches/coches.componet';
import { PlantillasComponent } from './myComponents/plantillas/plantillas.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: '**', component: CochesComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); DEPRECATED