import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-arg-programa',
  templateUrl: './logo-arg-programa.component.html',
  styleUrls: ['./logo-arg-programa.component.css']
})
export class LogoArgProgramaComponent implements OnInit {
  text: string= "Argentina Programa - #YoProgramo";

  constructor() { }

  ngOnInit(): void {
  }

}
