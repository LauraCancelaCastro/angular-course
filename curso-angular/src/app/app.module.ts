import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './myComponents/empleado.component';
import { HomeComponent } from './myComponents/menu/home.component';
import { ContactoComponent } from './myComponents/menu/contacto.component';
import { CochesComponent } from './myComponents/coches/coches.componet';
import { PlantillasComponent } from './myComponents/plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //HttpModule, DEPRECATED
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
