import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrls: ['./lista-asistencia.component.css']
})
export class ListaAsistenciaComponent implements OnInit {
  
  idEvento="";
  reportes: any = [
  ];

  no_disponible = "https://www.tibs.org.tw/images/default.jpg";

  constructor(private rest: RestService) { }

  ngOnInit(): void {
  }
  async buscarEvento(){
    
    let datos = {"idEvento": this.idEvento};
    this.rest.PostRequest("/asistencia/id", datos).subscribe(data => {
      if (data.status == 200) {
        console.log(data);
        this.reportes = data.body
      }
    })
  }
}
