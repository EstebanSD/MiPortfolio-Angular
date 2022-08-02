import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';



@Component({
  selector: 'app-redes-y-boton',
  templateUrl: './redes-y-boton.component.html',
  styleUrls: ['./redes-y-boton.component.css']
})
export class RedesYBotonComponent implements OnInit {
  
  imgTw: string = "https://brandeame.es/wp-content/uploads/2017/05/60414c58e954d7236837248225e0216f_new-twitter-logo-vector-eps-twitter-logo-clipart-png_518-518-300x300.png";
  imgIg: string = "https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-13.png";
  imgFb: string = "https://w7.pngwing.com/pngs/247/102/png-transparent-circle-facebook-fb-round-icon-social-media-social-network-popular-services-brands-vol-icon-thumbnail.png";
  imgLn: string = "https://cdn-icons-png.flaticon.com/512/174/174857.png";

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
