import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-crear-asistencia',
  templateUrl: './crear-asistencia.component.html',
  styleUrls: ['./crear-asistencia.component.css']
})
export class CrearAsistenciaComponent implements OnInit {

  asistencia: any = {
    carnet: "",
    nombre: "",
    nombreEvento: "",
    idEvento: "",
    extension: "",
    imagen: null,

    createdAt: "",
    procesado: "",
    updatedAt: "",
    mensaje: ""
  };

  imagen: any = ""
  no_disponible = "https://www.tibs.org.tw/images/default.jpg";

  constructor(private rest: RestService) { }

  ngOnInit(): void {
  }

  loadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.asistencia.extension = file.name.split('.')[1];
      const reader = new FileReader();
      reader.onload = e => { this.imagen = reader.result };
      reader.readAsDataURL(file);
    }
  }

  async enviarAsistencia() {
    this.asistencia.imagen = this.imagen.split(',')[1]

    this.rest.PostRequest("/asistencia/nueva", this.asistencia).subscribe(data => {
      if (data.status == 200) {
        console.log(data);
      }
    })
  }
}
