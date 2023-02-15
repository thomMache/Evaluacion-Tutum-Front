import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../models/calificacion';
import { ClienteService } from '../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admnistracion-clientes',
  templateUrl: './admnistracion-clientes.component.html',
  styleUrls: ['./admnistracion-clientes.component.css']
})
export class AdmnistracionClientesComponent implements OnInit {

  calificaciones: Calificacion[];
  titulo = 'Administración de Calificaciónes';
  constructor(private service: ClienteService) { }

  ngOnInit(){

    this.service.listar(1).subscribe(calificaciones =>this.calificaciones = calificaciones);
  }

  public eliminar(calificaciones: Calificacion): void{


    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar la calificacion ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {

      if (result.value) {
        this.service.eliminar(calificaciones.id).subscribe(() => {
          this.calificaciones = this.calificaciones.filter(a => a !== calificaciones);
          Swal.fire('Exito: ',`Calificacion ${calificaciones.id} eliminando con éxito`,'success');
        });
      }
    });


  }
}
