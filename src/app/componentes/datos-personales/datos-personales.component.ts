import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  nombre: string = "";
  edad: string = "";
  titulo: string = "";
  email: string = "";
  telefono: string = "";
  ciudad: string = "";

  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.nombre = data.datosPersonales.nombre;
      this.edad = data.datosPersonales.edad;
      this.titulo = data.datosPersonales.titulo;
      this.email = data.datosPersonales.e_mail;
      this.telefono = data.datosPersonales.telefono;
      this.ciudad = data.datosPersonales.ciudad;
    });
  }

}
