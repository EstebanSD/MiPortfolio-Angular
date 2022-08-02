import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {
  dataObjetList: any = "";

  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataObjetList = data.soft_skills;
    });
  }

}
