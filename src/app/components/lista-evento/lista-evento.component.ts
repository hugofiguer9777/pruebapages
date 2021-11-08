import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {
  
  carnet = "";
  nombre = ""
  reportes: any = [
  ];

  no_disponible = "https://www.tibs.org.tw/images/default.jpg";
  
  constructor(private rest: RestService) { }

  ngOnInit(): void {
  }
  async buscarCarnet(){

    let datos = {"carnet": this.carnet};
    this.rest.PostRequest("/asistencia/carnet", datos).subscribe(data => {
      if (data.status == 200) {
        console.log(data);
        this.reportes = data.body
        this.nombre = this.reportes[0].nombre
      }
    })
  }
}
