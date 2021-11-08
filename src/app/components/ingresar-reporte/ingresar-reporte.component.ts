import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-ingresar-reporte',
  templateUrl: './ingresar-reporte.component.html',
  styleUrls: ['./ingresar-reporte.component.css']
})
export class IngresarReporteComponent implements OnInit {

  carnet = ""
  nombre = ""
  tema = ""
  cuerpoReporte = ""

  constructor(
    private rest: RestService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  enviarReporte(){
    let datos={"carnet":this.carnet,"nombre":this.nombre,"tema":this.tema,"reporte":this.cuerpoReporte};

    console.log(datos)
    this.rest.PostRequest("/newreport",datos).subscribe(data => {
      console.log(data);
      if (data.status == 200) {
        this.router.navigate(['listaReportes']);
      }
    })
  }
}
