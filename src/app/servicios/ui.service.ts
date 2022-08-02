import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private mostrarLogin: boolean = false;
  private mostrarQuienSoy: boolean = false;
  private mostrarExpect: boolean = false;

  private subjetLogin = new Subject<any>();
  private subjetQuienSoy = new Subject<any>();
  private subjetExpect = new Subject<any>();

  constructor() { }

  toggleBoton(elem: string): void{
    if(elem == "login"){
      this.mostrarLogin = !this.mostrarLogin;
      this.subjetLogin.next(this.mostrarLogin);      
    }else{
      if(elem == "quienSoy"){
        this.mostrarQuienSoy = !this.mostrarQuienSoy;
        this.subjetQuienSoy.next(this.mostrarQuienSoy);
      }else{
        if(elem == "expect"){
        this.mostrarExpect = !this.mostrarExpect;
        this.subjetExpect.next(this.mostrarExpect);
        }
      }
    }
  }

  onToggle(elem: string): Observable<any>{
    if(elem == "login"){
      return this.subjetLogin.asObservable();
    }else{
      if(elem == "quienSoy"){
        return this.subjetQuienSoy.asObservable();
      }else{
          return this.subjetExpect.asObservable();
      }
    }
    
  }

}