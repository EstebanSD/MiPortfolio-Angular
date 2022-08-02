import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';
import { UiService } from 'src/app/servicios/ui.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expectativas',
  templateUrl: './expectativas.component.html',
  styleUrls: ['./expectativas.component.css']
})
export class ExpectativasComponent implements OnInit {
  dataObjet: any = "";
  textArea: string = "";
  showForm: boolean = false;
  subscription: Subscription;
  faXmark = faXmark;

  constructor(private datosPortfolio: DatosService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle("expect").subscribe(value => this.showForm = value);
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataObjet = data;
    });
  }

  toggle(){
    this.uiService.toggleBoton("expect");
  }
}
