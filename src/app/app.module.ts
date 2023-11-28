import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferenciasMaterialModule } from './referencias-material/referencias-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaFestivosComponent } from './componentes/tabla-festivos/tabla-festivos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TablaFestivosComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReferenciasMaterialModule,
    NgxDatatableModule,
    RouterModule.forRoot([{ path: '', component: TablaFestivosComponent }]),
    FormsModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
