import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  dataObjeto: any;

  constructor(private dataPortfolio: DatosService) { }

  ngOnInit(): void {
    this.dataPortfolio.obtenerDatos().subscribe(data => {
      this.dataObjeto = data;
    });
  }

}
