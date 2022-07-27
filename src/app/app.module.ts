import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExpectativasComponent } from './componentes/expectativas/expectativas.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { PerfilComponent } from './componentes/perfil/perfil.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExpectativasComponent,
    ExperienciaComponent,
    EducacionComponent,
    IdiomasComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    LoginComponent,
    DatosPersonalesComponent,
    QuienSoyComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
