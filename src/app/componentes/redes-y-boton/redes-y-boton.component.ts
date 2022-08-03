import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-redes-y-boton',
  templateUrl: './redes-y-boton.component.html',
  styleUrls: ['./redes-y-boton.component.css']
})
export class RedesYBotonComponent implements OnInit {
  
  imgTw: string = "../assets/img/Twitter.png";
  imgIg: string = "../assets/img/Instagram.png";
  imgFb: string = "../assets/img/Facebook.png";
  imgLn: string = "../assets/img/LinkedIn.png";

  redTw: string = "";
  redIg: string = "";
  redFb: string = "";
  redLn: string = "";

  @Input() msj: string = "Login";
  @Input() clase: string = "btn-outline-success";

  @Output() miClick = new EventEmitter<any>;
  
  constructor(private datosPortfolio: DatosService) { 
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.redTw = data.redTwitter;
      this.redIg = data.redInstagram;
      this.redFb = data.redFacebook;
      this.redLn = data.redLinkedIn;
    });
  }

  enviarMiClick(){
    this.miClick.emit();
  }
}
