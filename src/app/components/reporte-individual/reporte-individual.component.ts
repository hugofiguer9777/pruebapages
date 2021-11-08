import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-reporte-individual',
  templateUrl: './reporte-individual.component.html',
  styleUrls: ['./reporte-individual.component.css']
})
export class ReporteIndividualComponent implements OnInit {

  reporte: any = {
    carnet: "",
    nombre: "",
    tema: "",
    reporte: "",
    servidor: "",
    fecha: "",
  };

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getReporte();
  }

  async getReporte() {
    var id = sessionStorage.getItem("id");

    let datos={"carnet": id};
      this.rest.PostRequest("/report/id", datos).subscribe(data => {
        if (data.status == 200) {
          this.reporte = data.body[0];
        }
      })
    console.log(this.reporte);
  }

}
