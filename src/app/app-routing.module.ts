import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { ReporteIndividualComponent } from './components/reporte-individual/reporte-individual.component';
import { IngresarReporteComponent } from './components/ingresar-reporte/ingresar-reporte.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { ListaAsistenciaComponent } from './components/lista-asistencia/lista-asistencia.component';
import { ListaEventoComponent } from './components/lista-evento/lista-evento.component';

const routes: Routes = [
  {path: "", redirectTo: "/listaReportes", pathMatch: 'full'},
  {path: "reporteIndividual", component: ReporteIndividualComponent},
  {path: "listaReportes", component: ListaReportesComponent},
  {path: "ingresarReporte", component: IngresarReporteComponent},
  {path: "agregarAsistencia", component: CrearAsistenciaComponent},
  {path: "listaAsistencia", component: ListaAsistenciaComponent},
  {path: "listaEvento", component: ListaEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
