import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent implements OnInit {

  carnet = "";

  reportes: any = [
    // {carnet: "", nombre: "", curso: "", fecha: "", servidor: "", cuerpo: ""},
  ];

  constructor(private rest: RestService, private route:Router) { }

  ngOnInit(): void {
    this.buscarCarnet();
  }

  async buscarCarnet() {
    if (this.carnet == "") {
      // buscar todos
      var res = await this.rest.GetRequest("/getreports").toPromise();

      if (res.status == 200) {
        this.reportes = res.body;
      }
    }
    else {
      // buscar por carnet
      let datos={"carnet": this.carnet};
      this.rest.PostRequest("/report/id", datos).subscribe(data => {
        if (data.status == 200) {
          this.reportes = data.body;
        }
      })
    }

    for (const rep of this.reportes) {
      rep.createdAt = (new Date(rep.createdAt)).toLocaleString();
    }
  }

  verReporte(i: any) {
    sessionStorage.setItem("id", this.reportes[i].carnet);
    this.route.navigate(["reporteIndividual"]);
  }

}
