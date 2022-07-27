import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-expectativas',
  templateUrl: './expectativas.component.html',
  styleUrls: ['./expectativas.component.css']
})
export class ExpectativasComponent implements OnInit {
  dataObjeto: any;

  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataObjeto = data});
  }

}
