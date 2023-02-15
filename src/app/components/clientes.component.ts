import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Calificacion } from '../models/calificacion';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

 
  titulo = 'Agregar Calificacion';
  calificacion: Calificacion = new Calificacion();
  error: any;
  constructor(private service: ClienteService,
              private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id: number  = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(calificacion => this.calificacion = calificacion)
      }
    })
  }

  public crear():void{
    console.log(this.calificacion);
    this.service.crear(this.calificacion).subscribe( calificacion =>{
      console.log(calificacion);
        Swal.fire('Exito: ',`Calificacion ${calificacion.id} creado con exito`,'success');
        this.router.navigate(['/calificaciones']);
    }, err => {
      if(err.status === 500){
        this.error  = err.error;
        console.log(this.error)
      }
    });
  }


 public editar():void{
  this.service.editar(this.calificacion).subscribe( calificacion =>{
    console.log(calificacion);
    Swal.fire('Exito: ',`Calgicacion ${calificacion.id} actualizado con exito`,'success');
      this.router.navigate(['/calificaciones']);
  }, err => {
    if(err.status === 500){
      this.error  = err.error;
      console.log(this.error)
    }
  });
 }

}
