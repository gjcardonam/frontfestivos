import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Component, OnInit } from '@angular/core';
import { TablaFestivos } from '../../entidades/tabla-festivos';
import { FestivosService } from '../../servicios/festivos.service';
import { Festivo } from '../../entidades/festivo';

@Component({
  selector: 'app-tabla-festivos',
  templateUrl: './tabla-festivos.component.html',
  styleUrl: './tabla-festivos.component.css',
})
export class TablaFestivosComponent {
  public anno: number = 0;
  public fecha: Date = new Date();

  public columnas = [
    { name: 'Festivo', prop: 'nombre', width: 50 },
    { name: 'Fecha', prop: 'fecha', width: 50 },
  ];

  public festivos: Festivo[] = [];
  public modoColumna = ColumnMode;
  public SelectionType = SelectionType;
  public posicionSeleccionada: TablaFestivos | undefined;
  public ColumnMode = ColumnMode;
  public checkSelectable: boolean = true;
  public selected: any[] = [];

  constructor(private festivosService: FestivosService) {}

  public elegirAnno() {
    if (this.anno !== 0) {
      this.festivosService.obtener(this.anno).subscribe(
        (festivos: Festivo[]) => {
          this.festivos = festivos;
        },
        (error: any) => {
          console.error('Error al obtener los festivos:', error);
        }
      );
    } else {
      alert('Este no es un año valido');
    }
  }

  public verificarAnno() {
    const anno = this.fecha.getFullYear();
    const mes = this.fecha.getMonth() + 1;
    const dia = this.fecha.getDate();
    this.festivosService.verificar(anno, mes, dia).subscribe(
      (verificacion: String) => {
        alert(verificacion)
      },
      (error: any) => {
        console.error('Error al obtener los festivos:', error);
      }
    );
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.posicionSeleccionada = event.row;
    }
  }

  onSelect(event: any) {
    if (event.type == 'click') {
      this.posicionSeleccionada = event.row;
    }
  }
}
