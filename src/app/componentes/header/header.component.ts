import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  dataObject: any = "";
  showForm: boolean = false;
  subscription: Subscription;
  msj: string = "Login";
  color: string = "btn-outline-success";

  constructor(private datosPortfolio: DatosService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle("login").subscribe(value => { this.showForm = value });
  }

  ngOnInit(): void { 
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataObject = data;
    });
  }

  toggle(){
    this.uiService.toggleBoton("login");
    if(this.showForm){
      this.msj = "Logout";
      this.color = "btn-outline-danger";
    }else{
      this.msj = "Login";
      this.color = "btn-outline-success"; 
    }
  }

}
