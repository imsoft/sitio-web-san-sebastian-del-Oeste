import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { DirectorioComponent } from './gobierno/directorio/directorio.component';
import { MunicipioComponent } from './gobierno/municipio/municipio.component';
import { NumerosEmergenciaComponent } from './gobierno/numeros-emergencia/numeros-emergencia.component';
import { EconomiaComponent } from './economia/economia.component';
import { LugaresParaVisitarComponent } from './turismo/lugares-para-visitar/lugares-para-visitar.component';
import { PreguntasFrecuentesComponent } from './turismo/preguntas-frecuentes/preguntas-frecuentes.component';
import { QueHacerComponent } from './turismo/que-hacer/que-hacer.component';
import { ArticuloOchoComponent } from './transparencia/articulo-ocho/articulo-ocho.component';
import { ArticuloQuinceComponent } from './transparencia/articulo-quince/articulo-quince.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AvisoDePrivacidadComponent } from './aviso-de-privacidad/aviso-de-privacidad.component';
import { LeyDeDisciplinaFinancieraComponent } from './transparencia/ley-de-disciplina-financiera/ley-de-disciplina-financiera.component';
import { LeyGeneralDeContabilidadGubernamentalComponent } from './transparencia/ley-general-de-contabilidad-gubernamental/ley-general-de-contabilidad-gubernamental.component';


@NgModule({
  declarations: [
    InicioComponent,
    DirectorioComponent,
    MunicipioComponent,
    NumerosEmergenciaComponent,
    EconomiaComponent,
    LugaresParaVisitarComponent,
    PreguntasFrecuentesComponent,
    QueHacerComponent,
    ArticuloOchoComponent,
    ArticuloQuinceComponent,
    ContactoComponent,
    AvisoDePrivacidadComponent,
    LeyDeDisciplinaFinancieraComponent,
    LeyGeneralDeContabilidadGubernamentalComponent
  ],
  exports:[
    InicioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
