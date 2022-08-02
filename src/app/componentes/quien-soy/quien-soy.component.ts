import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  dataObjet: any = "";
  faXmark = faXmark; 
  textArea: string = "";
  showForm: boolean = false;
  subscription: Subscription;

  constructor(private datosPortfolio: DatosService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle("quienSoy").subscribe( value => { this.showForm = value });
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataObjet = data;
    });
  }

  onDelete(){
    console.log("Borrado");
  }

  toggle(){
    this.uiService.toggleBoton("quienSoy");
  }
}
