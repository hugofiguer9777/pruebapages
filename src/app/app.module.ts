import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteIndividualComponent } from './components/reporte-individual/reporte-individual.component';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './service/rest.service';
import { IngresarReporteComponent } from './components/ingresar-reporte/ingresar-reporte.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { ListaAsistenciaComponent } from './components/lista-asistencia/lista-asistencia.component';
import { ListaEventoComponent } from './components/lista-evento/lista-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ReporteIndividualComponent,
    ListaReportesComponent,
    MenubarComponent,
    IngresarReporteComponent,
    CrearAsistenciaComponent,
    ListaAsistenciaComponent,
    ListaEventoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
