import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private apiUrl = "http://localhost/3000";

  constructor(private http: HttpClient) { 

  }

  obtenerDatos(): Observable<any>{
    return this.http.get("../assets/data.json");
  }
}
